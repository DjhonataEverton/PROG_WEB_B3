//Removido
//const db = require("../models/produtos.js");
//Inserido
const { PrismaClient } = require('@prisma/client')


class ProdutoController {

    //Inserido


    async index(req, res) {
        //const produtos = await db.getProdutos();
        const prisma = new PrismaClient()
        const produtos = await prisma.produtos.findMany();
        res.render("pages/produtos", { produtos });
    }

    async store(req, res) {
        const prisma = new PrismaClient()
        const { nome, descricao, preco, codigo } = req.body;
        //Removido
        //const response = await db.saveProduto({email, nome, senha});

        //Inserido - Início
        const existe = await prisma.produtos.findFirst({ where: { codigo } });

        if (existe) {
            //Inserir um aviso que usuário já existe
            res.redirect("/produtos");
        }

        const response = await prisma.produtos.create({
            data: {
                descricao,
                nome,
                preco,
                codigo
            }
        })
        //Fim
        if (response) {
            res.redirect("/produtos");
        } else {
            res.redirect("/produtos");
        }
    }

    save(req, res) {
        res.render("pages/addProduto");
    }

    edit(req, res) {
        const { id } = req.params;
        res.render("pages/editarProduto", { id });
    }

    async update(req, res) {
        const prisma = new PrismaClient()
        const { descricao, nome, preco, codigo } = req.body;
        const { id } = req.params;
        //Removido
        //await db.updateProduto(email, { nome, senha });

        //Inserido - Início
        await prisma.produtos.update({
            data: {
                nome,
                descricao,
                preco,
                codigo,
            },
            where: { id }
        })
        //Fim
        res.redirect("/produtos");
    }

    deletar(req, res) {
        res.render("pages/deletarProduto", { id: req.params.id });
    }

    async destroy(req, res) {
        const prisma = new PrismaClient()
        const { id } = req.body;
        //Removido
        //await db.deleteProduto(email);

        //Inserido - Início
        const existe = await prisma.produtos.findUnique({ where: { id } });

        if (!existe) {
            //Inserir um aviso que usuário não existe
            res.redirect("/produtos");
        }
        await prisma.produtos.delete({
            where: {
                id,
            }
        })
        //Fim

        res.redirect("/produtos");
    }
}

module.exports = new ProdutoController()