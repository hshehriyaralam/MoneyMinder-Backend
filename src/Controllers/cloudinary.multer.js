import {cloudinary} from "../../Config/Cloudinary.js"
import {User} from "../Models/user.model.js"


const uploadProfileImage = async (req,res) => {
    try{
        if(!req.file){
            return res.status(400).json({
                message : "No file uploaded"
            })
        }

        const streamifier = await import("streamifier")

        // Wrap cloudinary upload_stream in a Promise
    await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "profile_pictures",
          resource_type: "image",
        },
        async (error, result) => {
          if (error) {
            console.error("Cloudinary Error", error);
            return reject(error);
          }

          // Save URL in DB
          const user = await User.findById(req.user._id);

          if (!user) {
            return reject(new Error("User not found"))
          }

          user.profilePicture = result.secure_url;
          await user.save();

          // Send Response
          res.status(200).json({
            message: "Profile image updated successfully",
            avatarUrl: result.secure_url,
          });

          resolve();
        }
      );

      // Pipe buffer to cloudinary stream
      streamifier.default.createReadStream(req.file.buffer).pipe(stream);
    });
    }catch(error){
        console.log("Upload Image Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}


export {uploadProfileImage}