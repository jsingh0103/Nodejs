
CREATE DATABASE user_database;


CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    user_id VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    user_email VARCHAR(255),
    user_age VARCHAR(255),
    user_password VARCHAR(255),
    avatar VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);