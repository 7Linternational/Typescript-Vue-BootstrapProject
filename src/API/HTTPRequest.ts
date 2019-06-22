import axios from 'axios';
import { MealCategories } from '../models/MealCategories';
import _ from "lodash";
import { Meals } from '../models/Meals';

class HTTPRequest {
    mainURL: string = "https://www.themealdb.com/api/json/v1/1/categories.php";

    APIMethods: object = {
        "categories": {
            "URLPart": "/categories.php",
            "Model": MealCategories,
            "InnerModel": Meals
        }
    };

    public makeAPICall(method: string = "", successResponse: Function) {

        let that = this;
        axios.get(this.mainURL + this.APIMethods[method].URLPart)
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);

                //

                switch (method) {
                    case "categories": {
                        let outerItem: MealCategories = new MealCategories()
                        let innerItem: Meals;
                        _.forEach(response.data.categories, o => {
                            innerItem = new Meals();
                            innerItem.idCategory = o.idCategory;
                            innerItem.strCategory = o.strCategory;
                            innerItem.strCategoryDescription = o.strCategoryDescription;
                            innerItem.strCategoryThumb = o.strCategoryThumb;

                            outerItem.categories.push(innerItem);
                        });

                        if (successResponse) {
                            successResponse(outerItem);
                        }

                        break;
                    }
                    default: {
                        //statements; 
                        break;
                    }
                }


            });
    }
}

export const httpRequest = new HTTPRequest();