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
(name,description, caracteristique,created_at,updated_at)
VALUES
(
	U->>'name',
	u->>'description',
	u->>'caracteristique',
	(u->>'created_at')::timestamptz,
	(u->>'updated_at')::timestamptz 
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
-- ! CREATE FUNCTION ITEM MAJ PREVU SUR CREATE CATEGORY
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
COMMIT;