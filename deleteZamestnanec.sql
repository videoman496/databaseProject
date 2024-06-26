BEGIN
    DELETE FROM Exponát WHERE ID_zamestnanca = zamestnanec_id;
    IF (ROW_COUNT() > 0) THEN
        DELETE FROM Zamestnanec WHERE ID_zamestnanca = zamestnanec_id;
        RETURN 1;
    ELSE
        DELETE FROM Zamestnanec WHERE ID_zamestnanca = zamestnanec_id;
        RETURN ROW_COUNT();
    END IF;
    RETURN 0;
END