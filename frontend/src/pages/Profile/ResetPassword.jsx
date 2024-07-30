import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthenticationContext/AuthContext";

const ResetPassword = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const { handleResetPassword } = useAuthContext();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <div className="lg:w-2/5 px-10 w-full mx-auto mb-10">
            <h4 className="text-center text-4xl font-medium mt-20" style={{ color: '#FFA500' }}>
                Reset Password
            </h4>
            <form onSubmit={handleSubmit(handleResetPassword)} className="mt-6">
                <div className=" w-full flex flex-col gap-4">
                    <div className="w-full">
                        <label htmlFor="old_password" className="mb-2 text-lg text-gray-800">
                            Old Password
                        </label>
                        <input
                            type="password"
                            {...register("old_password", {
                                required: "* This is required",
                                onChange: handleChange
                            })}
                            className={`${getValues("old_password")
                                ? "border-orange-300"
                                : "border-gray-300"
                                } border px-3 py-2 mt-2 rounded-sm text-md w-full focus:outline-orange-400 ${errors.old_password ? "border-red-400" : "border-gray-300"
                                }`}
                        />
                        {errors.old_password && (
                            <span className="text-red-400 mt-2 block">
                                {errors.old_password.message}
                            </span>
                        )}
                    </div>

                    <div className="w-full">
                        <label
                            htmlFor="new_password"
                            className="mb-2 text-lg text-gray-800"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            {...register("new_password", {
                                required: "* This is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]{8,}$/,
                                    message: "Password must contain at least one uppercase letter, one number, and one special character",
                                },
                                onChange: handleChange,
                            })}
                            className={`${getValues("new_password")
                                ? "border-orange-300"
                                : "border-gray-300"
                                } ${errors.password ? "border-red-400" : "border-gray-300"
                                } border px-3 py-2 rounded-sm text-md mt-2 w-full focus:outline-orange-400`}
                        />
                        {errors.new_password && (
                            <span className="text-red-400 mt-2 block">
                                {errors.new_password.message}
                            </span>
                        )}
                    </div>

                    <div className="w-full">
                        <label
                            htmlFor="confirm_password"
                            className="mb-2 text-lg text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            {...register("confirm_password", {
                                required: "* This is required",
                                validate: {
                                    matchesPassword: (value) => {
                                        const { new_password } = getValues();
                                        return new_password === value || "Passwords do not match";
                                    },
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\S]{8,}$/,
                                    message: "Password must contain at least one uppercase letter, one number, and one special character",
                                },
                                onChange: handleChange,
                            })}
                            className={`${getValues("confirm_password")
                                ? "border-orange-300"
                                : "border-gray-300"
                                } ${errors.confirm_password
                                    ? "border-red-400"
                                    : "border-gray-300"
                                } border px-3 py-2 rounded-sm text-md mt-2 w-full focus:outline-orange-400`}
                        />
                        {errors.confirm_password && (
                            <span className="text-red-400 mt-2 block">
                                {errors.confirm_password.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-center space-x-8s items-center mt-8 relative">
                        <button
                            type="button"
                            className="btn absolute left-0 top-0"
                            onClick={() => navigate(-1)}
                        >
                            <IoArrowBack />
                            Back
                        </button>
                        <button
                            type="submit"
                            className="btn btn-secondary rounded-lg py-2 px-4"
                            onClick={() => navigate("/profile/reset-password")}
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword