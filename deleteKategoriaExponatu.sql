BEGIN
    UPDATE Exponát SET ID_kategórie = NULL WHERE ID_kategórie = kategoria_id;
    DELETE FROM Kategória_exponátu WHERE ID_kategórie = kategoria_id;
    RETURN ROW_COUNT();
END