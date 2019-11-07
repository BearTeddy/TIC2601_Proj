
#TRUNCATE musicdb.artist;

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

#For Album Ashes_(2016) Duplicate same as first album
#INSERT INTO musicdb.artist (name) VALUES('Illenium');

#For Album Evanescence_Fallen_[LP]
INSERT INTO musicdb.artist (name) VALUES('Evanescence');

#For Album Taylor Swift - Lover - 2019
INSERT INTO musicdb.artist (name) VALUES('Taylor Swift');

#For Album Yiruma - Atmosfera (2014)
INSERT INTO musicdb.artist (name) VALUES('Yiruma');

#For Album Linkin Park - Underground 15 (2015)
Insert INTO musicdb.artist (name) VALUES('Linkin Park');

#For Album Eminem - Eminem Deep Cuts (2018)
INSERT INTO musicdb.artist (name) VALUES('Eminem');
INSERT INTO musicdb.artist (name) VALUES('D12');
INSERT INTO musicdb.artist (name) VALUES('RBX');
INSERT INTO musicdb.artist (name) VALUES('Sticky Fingaz');
INSERT INTO musicdb.artist (name) VALUES('Funkmaster Flex');
INSERT INTO musicdb.artist (name) VALUES('Big Kap');
INSERT INTO musicdb.artist (name) VALUES('Dr. Dre');
INSERT INTO musicdb.artist (name) VALUES('Royce Da 5 9');

# For Album Eminem - This is Eminem (2019)
INSERT INTO musicdb.artist (name) VALUES('Joyner Lucas');
INSERT INTO musicdb.artist (name) VALUES('Nate Dogg');
INSERT INTO musicdb.artist (name) VALUES('Ed Sheeran');
INSERT INTO musicdb.artist (name) VALUES('Rihanna');

#For 2017 - Heavy (Promo CD) Duplicate same as first album
#INSERT INTO musicdb.artist (name) VALUES('Linkin Park');

# For Album Becky Hill - Get To Know (2019)
INSERT INTO musicdb.artist (name) VALUES('Becky Hill');
INSERT INTO musicdb.artist (name) VALUES('Chris Loco');
INSERT INTO musicdb.artist (name) VALUES('Ryan Ashley');
INSERT INTO musicdb.artist (name) VALUES('WeiB');
INSERT INTO musicdb.artist (name) VALUES('Mark Hill');
INSERT INTO musicdb.artist (name) VALUES('MK');
INSERT INTO musicdb.artist (name) VALUES('Uzoechi Emenike');
INSERT INTO musicdb.artist (name) VALUES('Mike Kintish');
INSERT INTO musicdb.artist (name) VALUES('Sigala');
INSERT INTO musicdb.artist (name) VALUES('MNEK');
INSERT INTO musicdb.artist (name) VALUES('Jonas Blue');
INSERT INTO musicdb.artist (name) VALUES('Lostboy');
INSERT INTO musicdb.artist (name) VALUES('Matoma');
INSERT INTO musicdb.artist (name) VALUES('Mj Cole');
INSERT INTO musicdb.artist (name) VALUES('Charlie Hugall');
INSERT INTO musicdb.artist (name) VALUES('Bruce White');
INSERT INTO musicdb.artist (name) VALUES('Shift K3y');
INSERT INTO musicdb.artist (name) VALUES('Oliver Heldens');
INSERT INTO musicdb.artist (name) VALUES('Wilkinson');
INSERT INTO musicdb.artist (name) VALUES('Brad ELLIS');
INSERT INTO musicdb.artist (name) VALUES('TALAY RILEY');
INSERT INTO musicdb.artist (name) VALUES('Joe Jacquest');
INSERT INTO musicdb.artist (name) VALUES('Lovelle Hill');
INSERT INTO musicdb.artist (name) VALUES('Lucy Whalley');

# For Album 2015-Piano Same as Yiruma
# 

commit;
#CREATE TRIGGER MyTrigger BEFORE INSERT ON musicdb.artist
#FOR EACH ROW BEGIN

#	SET NEW.ArtistID = COALESCE(NEW.ArtistID, NEW.ArtistID);
  
  
#END