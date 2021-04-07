import connectDB from '../../utils/mongodb';
import user from '../../models/user';
import User from '../../models/user';

const handler = async (req, res) => {
    if (req.method == "POST") {
        const { name, email, password } = req.body;
        if (name && email && password) {
            var importUser = new User({
                name,
                email,
                password
            });
            var is_saved = await importUser.save();
            if (is_saved) {
                res.status(200).json({ status:"success", message: "Başarıyla kayıt olundu. Yönlendiriliyorsunuz..." });
            }
        } else {
            res.status(422).json({status: "failed", message: "Gönderilen bilgiler geçersiz veya boş bırakıldı."});
        }
    } else {
        res.status(422).json({status: "false", message: "Your request is blocked."});
    }
}

export default connectDB(handler);