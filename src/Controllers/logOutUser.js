const lougOut = async (req,res) => {
    try{
            res.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'None',
            });

            res.status(200).json({
                message: "Logout successful"
            })
        }catch(error){
        console.error("Logout error:", error.message);
        return res.status(500).json({ message: "Logout failed" });
        }
}


export {lougOut}