const request = require("supertest");

const server = require("./server.js");

describe("auth-router.js", function () {
  describe("POST /api/auth/register", function () {

    it("should return 500", function () {
      return request(server)
        .post("/api/auth/register")
        .then(response => {
          expect(response.status).toBe(500);
        });
    });

    it("should return 505", function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "used", password: "used" })
        .then(response => {
          expect(response.status).toBe(505);
        });
    });

  });

  describe("POST /api/auth/login", function () {

    it("should return 500", function () {
      return request(server)
        .post("/api/auth/login")
        .then(response => {
          expect(response.status).toBe(500);
        });
    });

    it("should return 505", function () {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "unknown", password: "unknown" })
        .then(response => {
          expect(response.status).toBe(505);
        });
    });

  });
});

describe("users-router.js", function () {
  describe("GET /api/users", function () {

    it("should return 200", function () {
      return request(server)
        .get("/api/users")
        .then(response => {
          expect(response.status).toBe(200)
        })
    })

    it("should return JSON", function () {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

  })
})

describe("jokes-router.js", function () {
  describe("GET /api/jokes/", function () {

    it("should return 400", function () {
      return request(server)
        .get("/api/jokes")
        .then(response => {
          expect(response.status).toBe(400);
        });
    });

  })
})
