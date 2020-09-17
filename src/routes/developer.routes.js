const { Router }  = require('express') ;
const router = Router();
const _ = require('underscore');

const developers = require('../data/developers.json');

router.get('/', (req,res) => {
    res.send('hola Avalith');
});

router.get('/developers', (req,res) => {
    res.json(developers);
});

router.get('/developers/:id', (req,res) => {
    const { id } = req.params;
    console.info(id);
    let developerSearched;
    _.each(developers,(developer,i)=>{
        
        if(developer && developer.id == id){
            developerSearched = developer
            console.info(developerSearched);
        }
    });
    res.json(developerSearched);

});

router.post('/developers', (req,res) => {
    console.info(developers);
    const id = developers.length>0? developers.slice(-1)[0].id  +1:1;
    req.body.id = id;
    const develop = {...req.body};
    developers.push(develop);
    res.json(developers);
});


router.put('/developers', (req,res) => {
    const { id } = req.body;
    
    const newDevelop = {...req.body};
    
    console.info(newDevelop);
    _.each(developers,(developer,i)=>{
        
        if(developer.id == id){
            developer.nombres_completos = newDevelop.nombres_completos;
            developer.tecnologias_conocidas = newDevelop.tecnologias_conocidas;
            developer.link_gitHub = newDevelop.link_gitHub;
        }
    });
    res.json(developers);
});
router.delete('/developers/:id', (req,res) => {
    const { id } = req.params;
    console.info(id);
    _.each(developers,(developer,i)=>{
        
        if(developer && developer.id == id){
            developers.splice(i,1);
        }
    });
    res.json(developers);

});

module.exports = router;