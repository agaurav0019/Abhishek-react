import React, { useState } from "react";
import "./rds-input.scss";
import Tooltip from "../rds-tooltip/rds-tooltip";
import { placements } from "../../libs/types";

export interface RdsInputProps {
	size?: "small" | "large" | "medium" | string;
	isDisabled?: boolean;
	readonly?: boolean;
	value?: any;
	inputType?: string;
	placeholder?: string;
	labelPositon?: string;
	tooltipPlacement?: placements;
	tooltipTitle?: string;
	name?: string;
	label?: string | "";
	id?: string;
	//required?: boolean;
	required?: boolean;

	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onKeyDown?:React.KeyboardEventHandler<HTMLInputElement>

  customClasses?: string;
  formName?: string;
}

const RdsInput = React.forwardRef(
  (props: RdsInputProps, ref: React.Ref<unknown> | undefined) => {
    let size: "sm" | "lg" | undefined = undefined;

    if (props.size == "small") {
      size = "sm";
    } else if (props.size == "large") {
      size = "lg";
    }
    //Error Messages
    const [haserror, setError] = useState(false);

    const inputClasses =
      "form-control form-control-" +
      size +
      " flex-grow-1 " +
      props.customClasses;

      const handleBlur = () => {
        if (!props.value ) {
          setError(true);
        }
      };
     
    
    
    return (
      <div>
        {!props.labelPositon && (
          <>
            {props.label && (
              <label htmlFor={props.id} className="form-label">
                {props.label}
              </label>
            )}
            {props.required && (
              <span className="text-danger ms-1">*</span>
            )}
          </>
        )}
        {props.labelPositon == "top" && (
          <>
            {props.label && (
              <>
                <label htmlFor={props.id} className="form-label">
                  {props.label}
                </label>
                {props.required && (
                  <span className="text-danger ms-1">*</span>
                )}
              </>
            )}
          </>
        )}


        {!props.tooltipTitle && (
          <input
            type={props.inputType}
            className={inputClasses}
            id={props.id}
            placeholder={props.placeholder}
						form={props.formName}
						required={props.required}
						onFocus={props.onFocus}
						onBlur={handleBlur}
						onKeyDown={props.onKeyDown}
						defaultValue={props.value}
						value={props.value}
						onChange={props.onChange}
						disabled={props.isDisabled}
						readOnly={props.readonly}
					></input>
				)}

				{props.tooltipTitle && (
					<Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
						<input
							type={props.inputType}
							className={inputClasses}
							id={props.id}
							placeholder={props.placeholder}
							name={props.name}
							form={props.formName}
							required={props.required}
							onFocus={props.onFocus}
							onBlur={handleBlur}
							onKeyDown={props.onKeyDown}
							defaultValue={props.value}
							value={props.value}
							onChange={props.onChange}
							disabled={props.isDisabled}
							readOnly={props.readonly}
						></input>
					</Tooltip>
				)}

        {props.labelPositon == "bottom" && (
          <>
            {props.label && (
              <>
                <label htmlFor={props.id} className="form-label">
                </label>
                {props.required && (
                  <span className="text-danger ms-1">*</span>
                )}
              </>
            )}
          </>
        )}
        <div className="form-control-feedback">
           {props.required && !props.value && haserror &&  (<span className="text-danger">{props.label} is required </span>)}
        </div>
      </div>
    );
  }
);

export default RdsInput;
