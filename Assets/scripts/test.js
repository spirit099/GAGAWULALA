#
pragma strict
var speed: float = 0.1 f;

var score: int = 0;

function Start() {
    //	// set position to (0,0) when begin
    //	transform.position.x = 0;
    //	transform.position.y = 0;
}

function Update() {
    //	// slow move to top right
    //	transform.position.x += 0.01;
    //	transform.position.y += 0.01;

    if (Input.GetKey(KeyCode.UpArrow)) {
        transform.position.y += speed;
    }
    if (Input.GetKey(KeyCode.DownArrow)) {
        transform.position.y -= speed;
    }
    if (Input.GetKey(KeyCode.RightArrow)) {
        transform.localScale.x = 1;
        transform.position.x += speed;
    }
    if (Input.GetKey(KeyCode.LeftArrow)) {
        transform.localScale.x = -1;
        transform.position.x -= speed;
    }
}

function OnCollisionEnter2D(coll: Collision2D) {
    if (coll.collider.name == "Jelly") {
        //
        score++;
        GameObject.Find("Score").guiText.text = "Score:" + score;
        Destroy(coll.gameObject);
    } 
       {else if (coll.collider.name == "Jelly")
            GameObject.Find("Score").guiText.text = "Score:" + score;
        Destroy(coll.gameObject);
    }
}