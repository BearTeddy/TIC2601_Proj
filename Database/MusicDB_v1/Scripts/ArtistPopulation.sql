
TRUNCATE musicdb.artist;

#For Album Illenium-ASCEND-2019 & Ashes 2016
INSERT INTO musicdb.artist (name) VALUES('Illenium');
INSERT INTO musicdb.artist (name)VALUES('Georgia Ku');
INSERT INTO musicdb.artist (name)VALUES('Jon Bellion');
INSERT INTO musicdb.artist (name)VALUES('GOLDN');
INSERT INTO musicdb.artist (name)VALUES('Foy Vance');
INSERT INTO musicdb.artist (name)VALUES('Oekiin');
INSERT INTO musicdb.artist (name)VALUES('Anna Clendening');
INSERT INTO musicdb.artist (name)VALUES('Echos');
INSERT INTO musicdb.artist (name)VALUES('The Chainsmokers');
INSERT INTO musicdb.artist (name)VALUES('Annika Wells');
INSERT INTO musicdb.artist (name)VALUES('X Ambassadors');
INSERT INTO musicdb.artist (name)VALUES('Bipolar Sunshine');
INSERT INTO musicdb.artist (name)VALUES('Blanke');
INSERT INTO musicdb.artist (name)VALUES('Chandler Leighton');
INSERT INTO musicdb.artist (name)VALUES('Said The Sky');


#For Album Pink Essentials
INSERT INTO musicdb.artist (name) VALUES('Pink');
INSERT INTO musicdb.artist (name) VALUES('Nate Ruess');

#For Album Black Stone Cherry - Black To Blues, Vol. 2 (2019)
INSERT INTO musicdb.artist (name) VALUES('Black Stone Cherry');

#For Album Evanescence_Fallen_[LP]
INSERT INTO musicdb.artist (name) VALUES('Evanescence_Fallen_[LP]');


commit;
#CREATE TRIGGER MyTrigger BEFORE INSERT ON musicdb.artist
#FOR EACH ROW BEGIN

#	SET NEW.ArtistID = COALESCE(NEW.ArtistID, NEW.ArtistID);
  
  
#END