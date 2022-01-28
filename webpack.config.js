//path transforme un chemain relatif en absolue
const path = require('path');

module.exports = {
    watch: true,
    //chemin d'entres
    entry: './src/index.js',
    output: {
        //chemin absolue 
        path: path.resolve(__dirname, 'dist'),
        //nom du fichier qui tournera a l'execution
        filename:'bundle.js'
    },
    //Pour bien deboguer, on utilise source map.Sava donner une carte entre le fichier source et le fichier du resultat de travail du webpack. 
    devtool: "source-map",
    //serveur local webpack, qu'il nous server le index.HTML et open true ouvrira la page quand on va lancer le server local. 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true
    }
}