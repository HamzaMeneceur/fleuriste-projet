BEGIN;
-- ! DEBUT FONCTION
CREATE OR REPLACE FUNCTION get_all_categories() RETURNS SETOF category AS $$

SELECT * FROM category;

$$ LANGUAGE sql SECURITY DEFINER;
-- ! FIN 
-- ! DEBUT FONCTION
CREATE OR REPLACE FUNCTION get_one_category(u int) RETURNS category AS $$

SELECT * FROM category
WHERE id = u;

$$ LANGUAGE sql SECURITY DEFINER;
-- ! FIN
-- ! DEBUT FONCTION
CREATE OR REPLACE FUNCTION create_category(u json) RETURNS category AS $$

INSERT INTO category
(name,description, caracteristique,created_at)
VALUES
(
	U->>'name',
	u->>'description',
	u->>'caracteristique',
	now()
)
RETURNING *;
$$ LANGUAGE sql SECURITY DEFINER;
-- ! FIN
-- ! DEBUT FONCTION
CREATE OR REPLACE FUNCTION delete_category(u int) RETURNS category AS $$

DELETE FROM category
	WHERE id = u

RETURNING *;
$$ LANGUAGE sql SECURITY DEFINER;
-- ! FIN
-- ! DEBUT FONCTION
CREATE OR REPLACE FUNCTION update_category(u int,v json) RETURNS category AS $$

UPDATE category
SET name = v->>'name',
	description = v->>'description',
	caracteristique = v->>'caracteristique',
	updated_at = now()

	WHERE id = u

RETURNING *;
$$ LANGUAGE sql SECURITY DEFINER;
-- ! FIN
-- ! DEBUT FUNCTION
CREATE OR REPLACE FUNCTION create_item(u json) RETURNS item AS $$

INSERT INTO item
(img,price, color,description,category_id,admin_id,created_at)
VALUES
(
	U->>'img',
	(u->>'price')::float,
	u->>'color',
	u->>'description',
	(u->>'category_id')::int,
	(u->>'admin_id')::int,
	now()
)
RETURNING *;
$$ LANGUAGE sql SECURITY DEFINER;
-- ! FIN
-- !
CREATE OR REPLACE FUNCTION delete_item(u int) RETURNS item AS $$

DELETE FROM item
	WHERE id = u

RETURNING *;
$$ LANGUAGE sql SECURITY DEFINER;
COMMIT;