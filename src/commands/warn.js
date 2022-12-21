const { EmbedBuilder, PermissionsBitField, RoleSelectMenuBuilder, ActionRowBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Birini uyarırsın!")
    .addUserOption(option => option.setName("kullanıcı").setDescription("Kimi uyaracaksın?").setRequired(true))
    .addStringOption(o => o.setName("sebep").setDescription("Ne sebep ile uyarıcaksın?"))
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.Administrator),
    run: async (client, interaction) => {
const user = interaction.options.getMember("kullanıcı")
const sebep = interaction.options.getString("sebep")
const config = require("../config.js")
client.channels.cache.get(config.warnlog).send(`
⚠️ Biri Uyarıldı! ⚠️

Kullanıcı: **${user.user.tag}**

Sebep: **${sebep ? sebep : "Yok"}**

`)
await interaction.reply({content:"Kullanıcı Uyarıldı!", ephemeral: true})
    }
 };
