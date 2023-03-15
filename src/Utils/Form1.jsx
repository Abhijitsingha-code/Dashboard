import React from "react";

const Form1 = () => {
  return (
    <div className="flex flex-col mr-10 p-6 pb-20">
      <div className=" ml-2">
        <p className="text-3xl font-bold mb-3">Form Control</p>
        <p className="text-md text-gray-500">
          Form is used to collect & verify user input data. We use Formik as our
          form control library, most of our form components were compatible with
          Formik binding.
        </p>
      </div>
      <div className="ml-2 mt-9">
        <div className="mb-4">
          <h3>Basic</h3>
          <p className="mr-2 text-md text-gray-500 ">
            Sample usage of a simple form with validation.
          </p>
        </div>
        <div className="form-container">
          <form className="grid  grid-cols gap-6">
            <div className="grid md:grid-cols-4 gap-1 grid-rows-1">
              <label htmlFor="first-name">
                <h4 className="form-label">First Name</h4>
                <input
                  id="first-name"
                  type="type"
                  placeholder="First Name"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
              <label htmlFor="last-name">
                <h4 className="form-label">Last Name</h4>
                <input
                  id="last-name"
                  type="type"
                  placeholder="Last Name"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
            </div>
            <div className="grid md:grid-cols-4 gap-1 grid-rows-1">
              <label htmlFor="father-name">
                <h4 className="form-label">
                  Father's Name
                </h4>
                <input
                  id="father-name"
                  type="type"
                  placeholder="Father's Name"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
              <label htmlFor="mother-name">
                <h4 className="form-label">
                  Mother's Name
                </h4>
                <input
                  id="mother-name"
                  type="type"
                  placeholder="Mother's Name"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-2 grid-rows-1">
              <label htmlFor="address">
                <h4 className="form-label">Address</h4>
                <input
                  id="address"
                  type='d'
                  placeholder="Address"
                  className="form-input-container
                  outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
              <label htmlFor="country">
                <h4 className="form-label">Country</h4>
                <input
                  id="country"
                  type="text"
                  placeholder="Country"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
              <label htmlFor="state">
                <h4 className="form-label">State</h4>
                <input
                  id="state"
                  type="text"
                  placeholder="State"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
            </div>
            <div className="grid md:grid-cols-4 gap-1 grid-rows-1">
            <label htmlFor="dist">
                <h4 className="form-label">District</h4>
                <input
                  id="dist"
                  type="text"
                  placeholder="District"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
              <label htmlFor="pin">
                <h4 className="form-label">Pin</h4>
                <input
                  id="pin"
                  type="text"
                  placeholder="Pin"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
            </div>
            <div className="grid md:grid-cols-4 gap-6 grid-rows-1">
              <label htmlFor="phone-no">
                <h4 className="form-label">Phone No</h4>
                <input
                  id="phone-no"
                  type="type"
                  placeholder="+91"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
              <label htmlFor="father-phone-no">
                <h4 className="form-label">
                  Father's Phone No
                </h4>
                <input
                  id="father-phone-no"
                  type="type"
                  placeholder="+91"
                  className="form-input-container outline-none focus:border-2 focus:border-orange-800"
                />
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <button className="w-[80px] bg-white text-indigo-900 hover:text-white border border-indigo-500 hover:bg-indigo-700 text-indigo-900 font-medium py-3 px-4 rounded focus:outline-none">
                Reset
              </button>
              <button
                className=" w-[80px]  bg-indigo-700 hover:bg-white text-white hover:text-indigo-900 border hover:border-indigo-500 font-medium py-3 px-4 rounded focus:outline-none"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
