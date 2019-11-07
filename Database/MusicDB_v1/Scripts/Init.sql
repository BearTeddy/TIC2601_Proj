

DROP TABLE IF EXISTS `album`;

CREATE TABLE `album` (
  `AlbumID` int(11) NOT NULL AUTO_INCREMENT,
  `ArtistID` int(11) NOT NULL,
  `Album_Title` varchar(255) NOT NULL,
  `Album_Artwork` varchar(255) DEFAULT NULL,
  `Description` text,
  `Date` date NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`AlbumID`,`Album_Title`,`Price`),
  UNIQUE KEY `AlbumID_UNIQUE` (`AlbumID`),
  KEY `ArtistID_idx` (`ArtistID`) /*!80000 INVISIBLE */,
  KEY `Price_idx` (`Price`),
  CONSTRAINT `ArtistID` FOREIGN KEY (`ArtistID`) REFERENCES `artist` (`ArtistID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `songtransaction`;

CREATE TABLE `songtransaction` (
  `Song_TransactionID` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Of_Purchased` date NOT NULL,
  `SongID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Song_Title` varchar(255) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`Song_TransactionID`),
  UNIQUE KEY `Song_TransactionID_UNIQUE` (`Song_TransactionID`),
  KEY `UserID_idx` (`UserID`),
  KEY `SongID_idx` (`SongID`),
  KEY `Price2_idx` (`Price`) /*!80000 INVISIBLE */,
  CONSTRAINT `Price2` FOREIGN KEY (`Price`) REFERENCES `song` (`Price`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `SongID` FOREIGN KEY (`SongID`) REFERENCES `song` (`SongID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserID` FOREIGN KEY (`UserID`) REFERENCES `userdata` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

#DROP TABLE IF EXISTS `albumtransaction`;

#CREATE TABLE `albumtransaction` (
#  `Album_TransactionID` int(11) NOT NULL AUTO_INCREMENT,
#  `Date_Of_Purchased` datetime NOT NULL,
#  `AlbumID` int(11) NOT NULL,
#  `UserID` int(11) NOT NULL,
# `Album_Title` varchar(255) NOT NULL,
#  `Price` decimal(10,0) NOT NULL,
#  PRIMARY KEY (`Album_TransactionID`),
#  UNIQUE KEY `Album_TransactionID_UNIQUE` (`Album_TransactionID`),
#  KEY `AlbumID_idx` (`AlbumID`),
# KEY `UserID_idx` (`UserID`),
#  KEY `Price_idx` (`Price`),
#  CONSTRAINT `AlbumID` FOREIGN KEY (`AlbumID`) REFERENCES `album` (`AlbumID`) ON DELETE CASCADE ON UPDATE CASCADE,
#  CONSTRAINT `Price` FOREIGN KEY (`Price`) REFERENCES `album` (`Price`) ON DELETE CASCADE ON UPDATE CASCADE,
#  CONSTRAINT `UserID2` FOREIGN KEY (`UserID`) REFERENCES `userdata` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
#) ENGINE=InnoDB;

DROP TABLE IF EXISTS `artist`;

CREATE TABLE `artist` (
  `ArtistID` int(11) NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`ArtistID`),
  UNIQUE KEY `ArtistID_UNIQUE` (`ArtistID`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `song`;

CREATE TABLE `song` (
  `SongID` int(11) NOT NULL AUTO_INCREMENT,
  `Song_Title` varchar(255) NOT NULL,
  `File_Location` varchar(255) NOT NULL,
  `Song_Artwork` varchar(255) DEFAULT NULL,
  `Price` decimal(10,0) NOT NULL,
  `AlbumID` int(11) DEFAULT NULL,
  `ArtistID` int(11) NOT NULL,
  #KEY `AlbumID_idx` (`AlbumID`),
  #KEY `Artist_idx` (`ArtistID`),
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`SongID`,`Price`),
  UNIQUE KEY `SongID_UNIQUE` (`SongID`),
  UNIQUE KEY `File_Location_UNIQUE` (`File_Location`),
  KEY `ArtistID_idx` (`ArtistID`) /*!80000 INVISIBLE */,
  CONSTRAINT `Artist_ID` FOREIGN KEY (`ArtistID`) REFERENCES `artist` (`ArtistID`) ON DELETE CASCADE ON UPDATE CASCADE,
  KEY `Price` (`Price`)
) ENGINE=InnoDB;



DROP TABLE IF EXISTS `userdata`;

CREATE TABLE `userdata` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Password` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Username_UNIQUE` (`Username`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `UserID_UNIQUE` (`UserID`)
) ENGINE=InnoDB;

commit;