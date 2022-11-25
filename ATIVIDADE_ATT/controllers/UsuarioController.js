//Removido
//const db = require("../models/usuarios.js");
//Inserido
const { PrismaClient } = require('@prisma/client')


class UsuarioController {

    //Inserido


    async index(req, res) {
        //const usuarios = await db.getUsuarios();
        const prisma = new PrismaClient()
        const usuarios = await prisma.usuarios.findMany();
        res.render("pages/usuarios", { usuarios });
    }

    async store(req, res) {
        const prisma = new PrismaClient()
        const { email, nome, senha } = req.body;
        //Removido
        //const response = await db.saveUsuario({email, nome, senha});

        //Inserido - Início
        const existe = await prisma.usuarios.findUnique({ where: { email } });

        if (existe) {
            //Inserir um aviso que usuário já existe
            res.redirect("/usuarios");
        }

        const response = await prisma.usuarios.create({
            data: {
                email,
                nome,
                senha
            }
        })
        //Fim
        if (response) {
            res.redirect("/usuarios");
        } else {
            res.redirect("/usuarios");
        }
    }

    save(req, res) {
        res.render("pages/addUsuario");
    }

    edit(req, res) {
        const { email } = req.params;
        res.render("pages/editarUsuario", { email });
    }

    async update(req, res) {
        const prisma = new PrismaClient()
        const { email, nome, senha } = req.body;
        //Removido
        //await db.updateUsuario(email, { nome, senha });

        //Inserido - Início
        await prisma.usuarios.update({
            data: {
                nome,
                senha
            },
            where: { email }
        })
        //Fim
        res.redirect("/usuarios");
    }

    deletar(req, res) {
        res.render("pages/deletar", { email: req.params.email });
    }

    async destroy(req, res) {
        const prisma = new PrismaClient()
        const { email } = req.body;
        //Removido
        //await db.deleteUsuario(email);

        //Inserido - Início
        const existe = await prisma.usuarios.findUnique({ where: { email } });

        if (!existe) {
            //Inserir um aviso que usuário não existe
            res.redirect("/usuarios");
        }
        await prisma.usuarios.delete({
            where: {
                email,
            }
        })
        //Fim

        res.redirect("/usuarios");
    }
}

module.exports = new UsuarioController()