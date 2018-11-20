const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {
  beforeEach((done) => {
    this.book = new ContactController();

    // clear the test database
    // since async, need to call done()
    sequelize.sync({force: true}).then((res) => {
      done();
    })
    .catch((err) => {
      done();
    })
  })
  it("should be defined", () => {
    // expect the actual value to be NOT undefined
    expect(ContactController).toBeDefined();
  });

  describe("#addContact()", () => {
    it("should add a single contact into the book", (done) => {
      // addContact (sequelize) will return a promise
      this.book.addContact("Alice", "001-101-1010")
      .then((contact) => {
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("001-101-1010");
          // done() tells jasmine this instance test is over async call completed
          done();
      })
      .catch((err) => {
        // done() tells jasmine this instance test is over and async call completed
        done();
      });
    });
  })
});
