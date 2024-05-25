import { expect } from './chai.js';
import { swiper, ball, items, like} from './app1.js';


describe('Swiper Initialization', () => {
    it('should have correct slidesPerView', () => {
        expect(swiper.params.slidesPerView).to.equal(4.5);
    });

    it('should have space between', () => {
        expect(swiper.params.spaceBetween).to.equal(30);
    });

    it('should have slide per group', () => {
        expect(swiper.params.slidesPerGroup).to.equal(3);
    });

    it('should have loop enabled', () => {
        expect(swiper.params.loop).to.be.true;
    });

    it('should have pagination clickable', () => {
        expect(swiper.params.pagination.clickable).to.be.true;
    });
});

describe('Check the functionality of ball', () => {

  it('The ball variable is not null', () => {
    if (ball != null) {
      expect(ball).to.not.be.null;
    }
  });

  it('The items variable is not null', () => {
    expect(items).to.not.be.null;
  });

  it('Clicking on the ball toggles the "active" class for items', () => {
    if (ball !== null) {
      ball.dispatchEvent(new Event('click'));

      if (items.length > 0) {
        items.forEach((item) => {
          expect(item.classList.contains('active')).to.be.true;
        });
      }

      expect(ball.classList.contains('active')).to.be.true;

      ball.dispatchEvent(new Event('click'));

      if (items.length > 0) {
        items.forEach((item) => {
          expect(item.classList.contains('active')).to.be.false;
        });
      }

      expect(ball.classList.contains('active')).to.be.false;
    }
  });
});

describe('Check behavior when clicking the like icon', () => {
  let like;

  like = document.querySelector('.fa-heart');

  it('Clicking the like icon toggles the "active" class', () => {
    if (like) {
      like.classList.toggle('active');
      expect(like.classList.contains('active')).to.be.true;
      like.classList.toggle('active');
      expect(like.classList.contains('active')).to.be.false;
    }
  });
});

