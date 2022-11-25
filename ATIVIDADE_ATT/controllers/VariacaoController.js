//Removido
//const db = require("../models/variacao.js");
//Inserido
const { PrismaClient } = require('@prisma/client')


class VariacaoController {

    //Inserido
    async index(req, res) {
        //const variacao = await db.getVariacaos();
        const prisma = new PrismaClient()
        const variacao = await prisma.variacao.findMany();
        res.render("pages/variacao", { variacao });
    }

    async store(req, res) {
        const prisma = new PrismaClient()
        const { tipo, valor } = req.body;

        //Removido
        //const response = await db.saveVariacao({email, nome, senha});

        //Inserido - Início
        const existe = await prisma.variacao.findFirst({ where: { tipo } });

        if (existe) {
            //Inserir um aviso que usuário já existe
            res.redirect("/variacao");
        }

        const response = await prisma.variacao.create({
            data: {
                tipo,
                valores: {
                    create: valor.map((item) => ({ valor: item }))
                }


            }
        })
        //Fim
        if (response) {
            res.redirect("/variacoes");
        } else {
            res.redirect("/variacoes");
        }
    }

    save(req, res) {
        res.render("pages/addVariacao");
    }

    edit(req, res) {
        const { id } = req.params;
        res.render("pages/editarVariacao", { id });
    }

    async update(req, res) {
        const prisma = new PrismaClient()
        const { descricao, nome, preco, codigo } = req.body;
        const { id } = req.params;
        //Removido
        //await db.updateVariacao(email, { nome, senha });

        //Inserido - Início
        await prisma.variacao.update({
            data: {
                nome,
                descricao,
                preco,
                codigo,
            },
            where: { id }
        })
        //Fim
        res.redirect("/variacao");
    }

    deletar(req, res) {
        res.render("pages/deletarVariacao", { id: req.params.id });
    }

    async destroy(req, res) {
        const prisma = new PrismaClient()
        const { id } = req.body;
        //Removido
        //await db.deleteVariacao(email);

        //Inserido - Início
        const existe = await prisma.variacao.findUnique({ where: { id } });

        if (!existe) {
            //Inserir um aviso que usuário não existe
            res.redirect("/variacao");
        }
        await prisma.variacao.delete({
            where: {
                id,
            }
        })
        //Fim

        res.redirect("/variacao");
    }
}

module.exports = new VariacaoController()