/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PersonalInfoResponse = {
    /**
     * The user's age. This field is only present if the user consented to the personal access scope. Otherwise, this field will be ```null```.
     */
    age?: number;
    /**
     * The user's weight (in kilograms). This field is only present if the user consented to the personal access scope. Otherwise, this field will be ```null```.
     */
    weight?: number;
    /**
     * The user's height (in meters). This field is only present if the user consented to the personal access scope. Otherwise, this field will be ```null```.
     */
    height?: number;
    /**
     * The user's biological sex. This field is only present if the user consented to the personal access scope. Otherwise, this field will be ```null```.
     */
    biological_sex?: string;
    /**
     * The user's e-mail. This field is only present if the user consented to the email access scope. Otherwise, this field will be ```null```.
     */
    email?: string;
};

