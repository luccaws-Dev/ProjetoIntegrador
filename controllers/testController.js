const testUserController = (req, res) => {
    try {
        res.status(200).send('<h1>Dados do teste de usuario</h1>')
    } catch(error){
        console.log('erro no teste da API', error);
    }
};

module.exports = {testUserController}