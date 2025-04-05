// animation.js

// Function to reveal elements on scroll
function revealOnScroll() {
    // ATTENTION SEEKER
    const Bounce = document.querySelectorAll('.bounce');
    const Flash = document.querySelectorAll('.flash');
    const Pulse = document.querySelectorAll('.pulse');
    const RubberBand = document.querySelectorAll('.rubberBand');
    const ShakeX = document.querySelectorAll('.shakeX');
    const ShakeY = document.querySelectorAll('.shakeY');
    const HeadShake = document.querySelectorAll('.headShake');
    const Swing = document.querySelectorAll('.swing');
    const Tada = document.querySelectorAll('.tada');
    const Wobble = document.querySelectorAll('.wobble');
    const Jello = document.querySelectorAll('.jello');
    const HeartBeat = document.querySelectorAll('.heartBeat');

    // FLIP ENTRANCE & EXITS
    const Flip = document.querySelectorAll('.flip');
    const FlipX = document.querySelectorAll('.flipX');
    const FlipY = document.querySelectorAll('.flipY');
    const FlipInX = document.querySelectorAll('.flipInX');
    const FlipInY = document.querySelectorAll('.flipInY');
    const FlipOutX = document.querySelectorAll('.flipOutX');
    const FlipOutY = document.querySelectorAll('.flipOutY');

    // LIGHTSPEED
    const LightSpeedInLeft = document.querySelectorAll('.lightSpeedInLeft');
    const LightSpeedInRight = document.querySelectorAll('.lightSpeedInRight');
    const LightSpeedOutLeft = document.querySelectorAll('.lightSpeedOutLeft');
    const LightSpeedOutRight = document.querySelectorAll('.lightSpeedOutRight');

    // SPECIALS
    const Hinge = document.querySelectorAll('.hinge');
    const JackInTheBox = document.querySelectorAll('.jackInTheBox');
    const RollIn = document.querySelectorAll('.rollIn');
    const RollOut = document.querySelectorAll('.rollOut');

    // BACK ENTRANCE & EXITS
    const BackInLeft = document.querySelectorAll('.backInLeft');
    const BackInRight = document.querySelectorAll('.backInRight');
    const BackInUp = document.querySelectorAll('.backInUp');
    const BackInDown = document.querySelectorAll('.backInDown');

    const BackOutLeft = document.querySelectorAll('.backOutLeft');
    const BackOutRight = document.querySelectorAll('.backOutRight');
    const BackOutUp = document.querySelectorAll('.backOutUp');
    const BackOutDown = document.querySelectorAll('.backOutDown');

    // BOUNCE ENTRANCES & EXITS
    const BounceIn = document.querySelectorAll('.bounceIn');
    const BounceInLeft = document.querySelectorAll('.bounceInLeft');
    const BounceInRight = document.querySelectorAll('.bounceInRight');
    const BounceInDown = document.querySelectorAll('.bounceInDown');
    const BounceInUp = document.querySelectorAll('.bounceInUp');

    const BounceOut = document.querySelectorAll('.bounceOut');
    const BounceOutLeft = document.querySelectorAll('.bounceOutLeft');
    const BounceOutRight = document.querySelectorAll('.bounceOutRight');
    const BounceOutUp = document.querySelectorAll('.bounceOutUp');
    const BounceOutDown = document.querySelectorAll('.bounceOutDown');

    // FADE ENTRANCES, EXITS & DIAGONALS
    const FadeIn = document.querySelectorAll('.fadeIn');
    const FadeInLeft = document.querySelectorAll('.fadeInLeft');
    const FadeInRight = document.querySelectorAll('.fadeInRight');
    const FadeInUp = document.querySelectorAll('.fadeInUp');
    const FadeInDown = document.querySelectorAll('.fadeInDown');
    const FadeInLeftBig = document.querySelectorAll('.fadeInLeftBig');
    const FadeInRightBig = document.querySelectorAll('.fadeInRightBig');
    const FadeInUpBig = document.querySelectorAll('.fadeInUpBig');
    const FadeInDownBig = document.querySelectorAll('.fadeInDownBig');

    const FadeOut = document.querySelectorAll('.fadeOut');
    const FadeOutLeft = document.querySelectorAll('.fadeOutLeft');
    const FadeOutRight = document.querySelectorAll('.fadeOutRight');
    const FadeOutUp = document.querySelectorAll('.fadeOutUp');
    const FadeOutDown = document.querySelectorAll('.fadeOutDown');
    const FadeOutLeftBig = document.querySelectorAll('.fadeOutLeftBig');
    const FadeOutRightBig = document.querySelectorAll('.fadeOutRightBig');
    const FadeOutUpBig = document.querySelectorAll('.fadeOutUpBig');
    const FadeOutDownBig = document.querySelectorAll('.fadeOutDownBig');

    const FadeInTopLeft = document.querySelectorAll('.fadeInTopLeft');
    const FadeInTopRight = document.querySelectorAll('.fadeInTopRight');
    const FadeInBottomLeft = document.querySelectorAll('.fadeInBottomLeft');
    const FadeInBottomRight = document.querySelectorAll('.fadeInBottomRight');
    const FadeOutTopLeft = document.querySelectorAll('.fadeOutTopLeft');
    const FadeOutTopRight = document.querySelectorAll('.fadeOutTopRight');
    const FadeOutBottomLeft = document.querySelectorAll('.fadeOutBottomLeft');
    const FadeOutBottomRight = document.querySelectorAll('.fadeOutBottomRight');

    // ROTATE ENTRANCE & EXITS
    const RotateIn = document.querySelectorAll('.rotateIn');
    const RotateInDownLeft = document.querySelectorAll('.rotateInDownLeft');
    const RotateInDownRight = document.querySelectorAll('.rotateInDownRight');
    const RotateInUpRight = document.querySelectorAll('.rotateInUpRight');
    const RotateInUpLeft = document.querySelectorAll('.rotateInUpLeft');

    const RotateOut = document.querySelectorAll('.rotateOut');
    const RotateOutDownLeft = document.querySelectorAll('.rotateOutDownLeft');
    const RotateOutDownRight = document.querySelectorAll('.rotateOutDownRight');
    const RotateOutUpRight = document.querySelectorAll('.rotateOutUpRight');
    const RotateOutUpLeft = document.querySelectorAll('.rotateOutUpLeft');

    // ZOOM ENTRANCE & EXITS
    const ZoomIn = document.querySelectorAll('.zoomIn');
    const ZoomInLeft = document.querySelectorAll('.zoomInLeft');
    const ZoomInRight = document.querySelectorAll('.zoomInRight');
    const ZoomInUp = document.querySelectorAll('.zoomInUp');
    const ZoomInDown = document.querySelectorAll('.zoomInDown');

    const ZoomOut = document.querySelectorAll('.zoomOut');
    const ZoomOutLeft = document.querySelectorAll('.zoomOutLeft');
    const ZoomOutRight = document.querySelectorAll('.zoomOutRight');
    const ZoomOutUp = document.querySelectorAll('.zoomOutUp');
    const ZoomOutDown = document.querySelectorAll('.zoomOutDown');

    // SLIDE ENTRANCE & EXITS
    const SlideInLeft = document.querySelectorAll('.slideInLeft');
    const SlideInRight = document.querySelectorAll('.slideInRight');
    const SlideInUp = document.querySelectorAll('.slideInUp');
    const SlideInDown = document.querySelectorAll('.slideInDown');

    const SlideOutLeft = document.querySelectorAll('.slideOutLeft');
    const SlideOutRight = document.querySelectorAll('.slideOutRight');
    const SlideOutUp = document.querySelectorAll('.slideOutUp');
    const SlideOutDown = document.querySelectorAll('.slideOutDown');
    
    
    // Combine all NodeLists into a single array
    const allElements = [
        ...Bounce, ...Flash, ...Pulse, ...RubberBand, ...ShakeX, ...ShakeY, ...HeadShake, ...Swing, ...Tada, ...Wobble, ...Jello, ...HeartBeat,
        ...Flip, ...FlipInX, ...FlipInY, ...FlipOutX, ...FlipOutY, ...FlipX, ...FlipY,
        ...LightSpeedInLeft, ...LightSpeedInRight, ...LightSpeedOutLeft, ...LightSpeedOutRight,
        ...Hinge, ...JackInTheBox, ...RollIn, ...RollOut,
        ...BackInDown, ...BackInLeft, ...BackInRight, ...BackInUp,
        ...BackOutDown, ...BackOutLeft, ...BackOutRight, ...BackOutUp,
        ...BounceIn, ...BounceInLeft, ...BounceInRight, ...BounceInUp, ...BounceInDown,
        ...BounceOut, ...BounceOutLeft, ...BounceOutRight, ...BounceOutUp, ...BounceOutDown,
        ...FadeIn, ...FadeInLeft, ...FadeInRight, ...FadeInUp, ...FadeInDown, ...FadeInLeftBig, ...FadeInRightBig, ...FadeInUpBig, ...FadeInDownBig,
        ...FadeOut, ...FadeOutLeft, ...FadeOutRight, ...FadeOutUp, ...FadeOutDown, ...FadeOutLeftBig, ...FadeOutRightBig, ...FadeOutUpBig, ...FadeOutDownBig,
        ...FadeInTopRight, ...FadeInTopLeft, ...FadeInBottomLeft, ...FadeInBottomRight,
        ...FadeOutTopRight, ...FadeOutTopLeft, ...FadeOutBottomLeft, ...FadeOutBottomRight,
        ...RotateIn, ...RotateInDownLeft, ...RotateInDownRight, ...RotateInUpLeft, ...RotateInUpRight,
        ...RotateOut, ...RotateOutDownLeft, ...RotateOutDownRight, ...RotateOutUpLeft, ...RotateOutUpRight,
        ...ZoomIn, ...ZoomInLeft, ...ZoomInRight, ...ZoomInUp, ...ZoomInDown,
        ...ZoomOut, ...ZoomOutLeft, ...ZoomOutRight, ...ZoomOutUp, ...ZoomOutDown,
        ...SlideInLeft, ...SlideInRight, ...SlideInUp, ...SlideInDown,
        ...SlideOutLeft, ...SlideOutRight, ...SlideOutUp, ...SlideOutDown
    ];

    allElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // Adjust this value for when the element should appear

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}



// Attach the scroll event listener
window.addEventListener('scroll', revealOnScroll);
window.onload = revealOnScroll;

// Initial call to reveal elements already in view
revealOnScroll();
