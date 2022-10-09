// describe("SimpleStorage", () => {})
// describe("SimpleStorage", function () {
//   beforeEach()

//   it()
//   it()
//   it()
//   describe("something", () => {
//     beforeEach()

//     it()
//     it()
//     it()
//   })
// })

const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
  // let SimpleStorageFactory
  // let simpleStorage
  let SimpleStorageFactory, simpleStorage

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")

    simpleStorage = await SimpleStorageFactory.deploy()
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    // assert
    // expect

    // assert.equal(currentValue.toString(), expectedValue)
    expect(currentValue.toString()).to.equal(expectedValue)
  })

  // it.only("Should update when we call store", async function () {
  it("Should update when we call store", async function () {
    const expectedValue = "2"
    const transactionResponse = await simpleStorage.store(expectedValue)

    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    // assert.equal(currentValue.toString(), expectedValue)
    expect(currentValue.toString()).to.equal(expectedValue)
  })
})
