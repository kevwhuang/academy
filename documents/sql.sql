/* MySQL Example Queries */
--
CREATE USER 'user'@'%' IDENTIFIED BY 'password';

GRANT
SELECT
    ON *.* TO user;

FLUSH PRIVILEGES;

DROP USER 'user'@'%';

DROP DATABASE IF EXISTS admin;

CREATE DATABASE admin;

USE admin;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    password VARCHAR (255),
    admin TINYINT (1),
    date DATETIME,
    field_1 INT,
    field_2 INT,
    field_3 VARCHAR (100),
    field_4 VARCHAR (100),
    field_5 VARCHAR (100),
    field_6 VARCHAR (100),
    field_7 VARCHAR (100),
    field_8 INTEGER (100),
    PRIMARY KEY (id),
    UNIQUE (field_4)
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
        NOW(),
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
        NOW(),
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

CREATE TABLE history AS
SELECT
    *
FROM
    users;

TRUNCATE TABLE history;

DROP TRIGGER IF EXISTS after_delete;

DELIMITER $$

CREATE TRIGGER after_delete
AFTER
    DELETE ON users FOR EACH ROW BEGIN
INSERT INTO
    history
VALUES
    (
        OLD.id,
        OLD.password,
        OLD.admin,
        OLD.date,
        OLD.field_1,
        OLD.field_2,
        OLD.field_3,
        OLD.field_4,
        OLD.field_5,
        OLD.field_6,
        OLD.field_7,
        OLD.field_8
    );

END$$

DELIMITER ;

DELETE FROM
    `admin`.`users`
WHERE
    id = 3;

UPDATE
    users
SET
    field_2 = 30
WHERE
    id = 2;

ALTER TABLE
    users
ADD
    field_9 INT
AFTER
    field_8;

ALTER TABLE
    users
MODIFY
    field_9 VARCHAR (255);

ALTER TABLE
    users DROP field_9;

CREATE UNIQUE INDEX my_index ON users (password);

ALTER TABLE
    users DROP INDEX my_index;

CREATE TABLE data0 (
    id INT AUTO_INCREMENT,
    users_id INT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    body TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE
);

RENAME TABLE data0 to data1;

INSERT INTO
    data1 (users_id, body)
VALUES
    (1, 'body1'),
    (2, 'body2');

CREATE TABLE data2 (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    body TEXT,
    CONSTRAINT id_body UNIQUE (id),
    CHECK (body >= 0)
);

INSERT INTO
    data2 (body)
VALUES
    (111),
    (111);

REPLACE INTO data2
VALUES
    (2, 222);

SELECT
    CONCAT_WS('@', user, host) AS user,
    IF(select_priv = 'Y', 'yes', NULL) AS _select,
    CASE
        WHEN insert_priv = 'Y' THEN 'yes'
        ELSE NULL
    END AS _insert,
    CURTIME() AS time,
    TRUNCATE(RAND(), 5) AS token
FROM
    mysql.user
WHERE
    user NOT LIKE 'mysql%'
ORDER BY
    user;

SHOW TABLES;

DESCRIBE users;

SELECT
    DISTINCT users.id,
    UCASE(password) AS 'my pass',
    field_1,
    field_2,
    CONCAT(field_6, ' ', field_7),
    DAYNAME(IFNULL(data1.date, CURRENT_DATE())),
    data2.body
FROM
    users
    INNER JOIN data1 ON users.id = data1.users_id
    LEFT JOIN data2 ON users.id = data2.id
WHERE
    field_1 != 0
    AND field_2 > 10
    AND field_2 IN (20, 30)
    AND field_3 IS NULL
    AND field_4 IS NOT NULL
    AND field_5 = 'value'
    AND field_6 LIKE 'start%'
    AND field_7 LIKE '%_nd'
    AND (
        field_8 NOT BETWEEN 0
        AND 99
    )
ORDER BY
    field_1 * field_2 DESC,
    field_1 ASC
LIMIT
    100;

DROP TABLE IF EXISTS temp;

CREATE TEMPORARY TABLE temp
SELECT
    COUNT(field_2),
    MIN(field_2),
    MAX(field_2),
    AVG(field_2),
    SUM(field_2) AS sum
FROM
    users u
GROUP BY
    u.field_3 WITH ROLLUP
HAVING
    COUNT(field_2) <> 0
LIMIT
    1;

INSERT INTO
    temp (sum)
SELECT
    NULL;

SELECT
    *
FROM
    temp
WHERE
    sum > ALL (
        SELECT
            0
    );

DROP VIEW IF EXISTS master;

CREATE VIEW master AS
SELECT
    *
FROM
    users;

DROP PROCEDURE IF EXISTS `get`;

DELIMITER ^

CREATE PROCEDURE `get` () BEGIN (
    SELECT
        *
    FROM
        users
)
INTERSECT
(
    SELECT
        *
    FROM
        users
)
UNION
(
    SELECT
        *
    FROM
        users
);
END^

CALL `get`^