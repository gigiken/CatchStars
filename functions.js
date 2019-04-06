$(document).on('mousemove touchmove', function (e) {
    basket.css('left', e.pageX);
});

function star_down(star) {
    star_current_position = parseInt(star.css('top'));
    star.css('top', star_current_position + speed);
}

function check_star_hits_floor(star) {
    if (collision(star, floor)) {
        show_bulls_eye(star);
        decrement_life();
        return true;
    }
    return false;
}

function set_star_to_initial_position(star) {
    star.css('top', star_initial_position);
}

function show_bulls_eye(star) {
    bullseye_num = star.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_star_hits_basket(star) {
    if (collision(star, basket_inner)) {
        star_top = parseInt(star.css('top'));
        if (star_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}

function stop_the_game() {
    
    if(ismobile()) {
        $(".mobile").show();
    } else {
        $(".desktop").show();
    }

     hen.hide();
     stars.hide();
     basket.hide();


    if(score < 20) {
        
        $('.dissapointment').slideDown();
        
        $("#restart").addClass('error'); // adjust restart btn + message
        $(".success").hide();
        $(".error").show();
    
    } else {
        $('.win').slideDown();


       $("#restart").addClass('success');
       
       $(".success-message").html(score30) 
       if(score > 50)
            $(".success-message").html(score50)
       if(score > 70)
            $(".success-message").html(score70) 

       $(".success").show();
       $(".error").hide();
    }

    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});

start.click(function () {
   hen.show();
   stars.show();

   anim_id = requestAnimationFrame(the_game);
   start.slideUp();
});


function ismobile(){
     var newWindowWidth = $(window).width();

        return (newWindowWidth < 768);
}