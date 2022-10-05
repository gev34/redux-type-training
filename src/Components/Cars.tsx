import  React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColorAction, initialCars } from "../features/carsReducer/carsReducer";
import { DataProps } from "../features/carsReducer/carsReducer";



const Cars = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => {
       return state     
    })


  return (
    <div>
      {initialCars.map((car: DataProps, index) => {
        return (
          <div
            style={{
              backgroundColor: `${car.backgroundColor}`,
              width: "300px",
            }}
            key={index + "car"}
          >
            <img src={car.image} style={{ width: "150px", height: "150px" }} />
            <h2>{car.company}</h2>
            <h3>{car.model}</h3>
            <form
              onSubmit={(e:any) => {
                e.preventDefault();
                const form = e.target;
                const newBgc = form.newcolor.value;
                dispatch(changeColorAction("EDIT_CAR_DATA" , index , newBgc))
              }}
            >
              <label> NewBGC:
                <input
                  type="text"
                  name="newcolor"
                />
              </label>

              <input type="submit" value="Change BGC" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
