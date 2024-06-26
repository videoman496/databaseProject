BEGIN
    IF NOT EXISTS (SELECT * FROM Výstavná_sála WHERE ID_sály = sala_id) THEN
        RETURN 0;
    END IF;
    DELETE FROM Exponát WHERE ID_výstavnej_sály = sala_id;
    DELETE FROM Výstavná_sála WHERE ID_sály = sala_id;
    RETURN 1;
END