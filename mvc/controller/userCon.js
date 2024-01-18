const User = require('../model/user')

//http://localhost:4000/api/getapi
// To Get Data:
const getdata = async (req, res) => {
    try {
        let got = await User.find({})
        console.log(got, '---got')

        if (!got) {
            return res.status(404).json({ message: 'Page is not Found' })
        }
        return res.status(200).json({ "status": true, "result": got })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ "status": false, "message": "Error On server" })
    }
}

// Get Single User:
const getSingleUser = async (req, res) => {
    try {
        console.log(req.params, '---body')
        const { id } = req.params.id;
        let got = await User.findById({ id })
        console.log(got, '---got')

        if (!got) {
            return res.status(404).json({ message: 'Page is not Found' })
        }
        return res.status(200).json({ "status": true, "result": got })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ "status": false, "message": "Error On server" })
    }
}

// Update Single User:
const updateSingleUser = async (req, res) => {
    let updata
    const id = req.params.id;
    const { name, email, password } = req.body;
    try {
        updata = await User.findByIdAndUpdate(id, {
            name,
            email,
            password
        })
        await updata.save()
    }
    catch (err) {
        console.log(err)
    }
    if (!updata) {
        return res.status(404).json({ message: 'no data' })
    }
    return res.status(200).json({ updata })
}

// Delete Single User:
const deleteSingleUser = async (req, res) => {
    let del
    const id = req.params.id;
    try {
        del = await User.findByIdAndDelete(id)
    }
    catch (err) {
        console.log(err)
    }
    if (!del) {
        return res.status(404).json({ message: 'no data' })
    }
    return res.status(200).json({ del })
}

//http://localhost:4000/api/postapi
// To Post Data:
const postdata = async (req, res) => {
    const { name, email, password } = req.body;
    let pos;
    try {
        pos = new User({
            name, email, password
        })
        await pos.save();

    }
    catch (err) {
        console.log(err)
    }
    if (!pos) {
        return res.status(404).json({ message: 'Page is not Found' })
    }
    return res.status(200).json({ pos })
}

module.exports = {
    getdata,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    postdata
}