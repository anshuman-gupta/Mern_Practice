const express = require("express")
const app= express()
const config= require("./config")
const {createProxyMiddleware} = require("http-proxy-middleware")

app.use("/user", createProxyMiddleware({
    target:config.user_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/user':'/'
    }
}))

app.use("/authentication", createProxyMiddleware({
    target: config.authentication_URL,
    changeOrigin:true,
    pathRewrite:{
        '^/authentication':'/'
    }
}))


module.exports = app