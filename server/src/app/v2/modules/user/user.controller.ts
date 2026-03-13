import { paginationHelper } from "../../../helpers/paginationHelper";
import { pick } from "../../../helpers/pick";
import { catchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import { UserService } from "./user.service";

const getAllUsers = catchAsync(async (req, res, next) => {
  const options = pick(req.query, paginationHelper.paginationFields);
  const filters = pick(req.query, [
    "searchTerm",
    "role",
    "country",
    "city",
    "topGuides",
  ]);

  const data = await UserService.getAllUserFromDB(options, filters);
  sendResponse(res, {
    message: "Users fetched successfully",
    statusCode: 200,
    success: true,
    meta: data.meta,
    data: data.data,
  });
});

const getSingleUser = catchAsync(async (req, res, next) => {
  sendResponse(res, {
    message: "User fetched successfully",
    statusCode: 200,
    success: true,
    data: await UserService.getSingleUserFromDB(req.params.id),
  });
});

export const UserController = { getAllUsers, getSingleUser };
