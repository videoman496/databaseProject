BEGIN
    DELETE FROM Exponát WHERE ID_exponátu = exponat_id;
    RETURN ROW_COUNT(); -- Возвращает количество удаленных строк
END