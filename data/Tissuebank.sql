PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Registrations(
Animalcode VARCHAR(50),
Species VARCHAR(50),
GeneticBackground VARCHAR(50),
Sex VARCHAR(50),
DOB DATE,
MethodofEuthanasia VARCHAR(50),
Location VARCHAR(50),
Availability DATE
);
INSERT INTO Registrations VALUES('7','Manatee','Trichechus inunguis','Male','10/8/2020','Other and open repair of indirect inguinal hernia','87 Messerschmidt Circle','4.8.2021');
INSERT INTO Registrations VALUES('56','Badger, european','Meles meles','Female','9/9/2020','Closed [percutaneous] [needle] biopsy of lung','6 Michigan Street','27.2.2021');
INSERT INTO Registrations VALUES('96554','Yellow-billed hornbill','Tockus flavirostris','Male','12/2/2021','Phlebography of pulmonary veins using contrast material','8 Gale Road','27.6.2021');
INSERT INTO Registrations VALUES('68','Long-tailed jaeger','Stercorarius longicausus','Female','16/5/2021','Removal of lesion of anterior segment of eye, not otherwise specified','40503 Knutson Place','15.5.2021');
INSERT INTO Registrations VALUES('747','Shelduck, european','Tadorna tadorna','Female','4/9/2020','Ureteral catheterization','20374 Drewry Pass','7.12.2020');
INSERT INTO Registrations VALUES('7059','Glider, feathertail','Acrobates pygmaeus','Female','5/9/2020','Other partial ostectomy, carpals and metacarpals','3 Sunnyside Way','17.2.2021');
INSERT INTO Registrations VALUES('6','Red-billed hornbill','Tockus erythrorhyncus','Male','7/12/2020','Insertion of bone growth stimulator, patella','667 Myrtle Street','20.11.2020');
INSERT INTO Registrations VALUES('7','Hare, arctic','Lepus arcticus','Female','17/1/2021','Therapeutic photopheresis','0409 Lotheville Way','8.12.2020');
INSERT INTO Registrations VALUES('62','Dove, white-winged','Zenaida asiatica','Male','24/2/2021','Excision of perianal skin tags','19459 Westerfield Alley','10.5.2021');
COMMIT;
