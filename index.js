const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('social_network', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM(['male', 'female']),
        allowNull: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },


}, {
    // Other model options go here
    tableName: 'users',
    timestamps: false
});

const Music = sequelize.define('Music', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    janr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nazvanie: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    // Other model options go here
    tableName: 'music',
    timestamps: false
});



; (async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        });

        // Заполнение 

        // const user = await User.create({
        //     first_name: "Denis",
        //     last_name: "Hello",
        //     email: 'hi@mail.ru',
        //     password: 'privet'
        // });
        // console.log("User's auto-generated ID:", user.id);

        // findAll + условие

        // const users = await User.findAll({
        //     // where: {
        //     //     id: 3
        //     // }
        // });

        // Редактирование

        // User.first_name = 'Dmitriy'
        // User.save()


        // findByPK + удаление

        // const user = await User.findByPk(1);
        // user.destroy();




    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
