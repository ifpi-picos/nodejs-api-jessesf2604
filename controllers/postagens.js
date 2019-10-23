class Postagens{
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }

    async adicionar (postagemDTO) {
        const postagem = new this.Postagem(postagemDTO);
        await postagem.save();
        return 'Adicionado com sucesso!';
    }

    async consultarTodos (){
        const postagens = await this.Postagem.find({});
        return postagem;
    }

    async alterarPorId(id, PostagemDTO){
        await this.Postagem.updateOne({_id: id}, postagemDTO);
    }

    async consultarPorId(id){
        const postagem = await this.Postagem.findById(id);
        return postagem;
    }

    async deletePorId(id){
        await this.Postagem.deleteOne({_id: id});
    }
}

module.exports = Postagens;