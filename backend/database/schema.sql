DROP TABLE IF EXISTS borne;
CREATE TABLE borne (
	id VARCHAR (80) NOT NULL PRIMARY KEY,
	n_station VARCHAR(255)  NOT NULL,
	ad_station VARCHAR(255)  NOT NULL,
	code_postal VARCHAR (80)  NOT NULL,
	lng FLOAT NOT NULL,
	lat FLOAT NOT NULL,
	puiss_max VARCHAR(80) NOT NULL,
	accessibilite VARCHAR(80)  NOT NULL,
	type_prise VARCHAR(250)  NOT NULL,
	n_enseigne  VARCHAR (80)  NOT NULL,
	date_maj DATE NOT NULL
);
