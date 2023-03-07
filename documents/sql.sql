DROP DATABASE IF EXISTS admin;

CREATE DATABASE admin;

USE admin;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    password VARCHAR(255),
    admin TINYINT(1),
    date DATETIME,
    field_1 INT,
    field_2 INT,
    field_3 VARCHAR(100),
    field_4 VARCHAR(100),
    field_5 VARCHAR(100),
    field_6 VARCHAR(100),
    field_7 VARCHAR(100),
    field_8 INTEGER(100),
    PRIMARY KEY (id)
);

INSERT INTO
    users (
        password,
        admin,
        date,
        field_1,
        field_2,
        field_3,
        field_4,
        field_5,
        field_6,
        field_7,
        field_8
    )
VALUES
    (
        'pass1',
        0,
        now(),
        10,
        20,
        NULL,
        'a',
        'value',
        'start1',
        '1end',
        100
    ),
    (
        'pass2',
        1,
        now(),
        10,
        20,
        NULL,
        'b',
        'value',
        'start2',
        '2end',
        100
    );

INSERT INTO
    users ()
VALUES
    ();

DELETE FROM
    admin.users
WHERE
    id = 3;

UPDATE
    users
SET
    field_2 = 30
WHERE
    id = 2;

SELECT
    DISTINCT id,
    password AS pass,
    date,
    field_1,
    field_2
FROM
    users
WHERE
    field_1 != 0
    AND field_2 > 10
    AND field_3 IS NULL
    AND field_4 IS NOT NULL
    AND field_5 = 'value'
    AND field_6 LIKE 'start%'
    AND field_7 LIKE '%end'
    AND (
        field_8 NOT BETWEEN 0
        AND 99
    )
ORDER BY
    field_1 * field_2 DESC,
    field_1 ASC
LIMIT
    100;