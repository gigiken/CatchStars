$(function () {

    the_game = function () {
        console.log("the game");
        if (check_star_hits_floor(star1) || check_star_hits_basket(star1)) {
            set_star_to_initial_position(star1);
        } else {
            star_down(star1);
        }

        if (check_star_hits_floor(star2) || check_star_hits_basket(star2)) {
            set_star_to_initial_position(star2);
        } else {
            star_down(star2);
        }

        if (check_star_hits_floor(star3) || check_star_hits_basket(star3)) {
            set_star_to_initial_position(star3);
        } else {
            star_down(star3);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    //anim_id = requestAnimationFrame(the_game);

});