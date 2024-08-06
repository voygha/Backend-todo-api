indexCtrl = {};

indexCtrl.renderIndex = (req,res) =>{
    res.json({message:'Bienvenido al index'});
}

module.exports = indexCtrl;