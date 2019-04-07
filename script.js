$(function () {

    the_game = function () {
        console.log("the game");
        if (check_star_hits_floor(star1, speed1) || check_star_hits_basket(star1, speed1)) {
            set_star_to_initial_position(star1, speed1);
        } else {
            star_down(star1, speed1);
        }

        if (check_star_hits_floor(star2, speed2) || check_star_hits_basket(star2, speed2)) {
            set_star_to_initial_position(star2, speed2);
        } else {
            star_down(star2, speed2);
        }

        if (check_star_hits_floor(star3, speed3) || check_star_hits_basket(star3, speed3)) {
            set_star_to_initial_position(star3, speed3);
        } else {
            star_down(star3, speed3);
        }

        if (life > 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    //anim_id = requestAnimationFrame(the_game);

});