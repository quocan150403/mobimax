// Đối tượng `Validator`
function Validator(options) {
  // Hàm tìm element form-group
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  // Hàm xử lí ẩn hiện icon PassWord
  function handelPassWord(input, formGroupElement) {
    if (arguments.length > 1) {
      var iconEyesHide = formGroupElement.querySelector(".iconEyesHide");
      var iconEyesShow = formGroupElement.querySelector(".iconEyesShow");
      if (input.type === "password") {
        iconEyesHide.classList.remove("active");
        iconEyesShow.classList.add("active");
      } else {
        iconEyesHide.classList.add("active");
        iconEyesShow.classList.remove("active");
      }
    }
    var currentType = input.getAttribute("type");
    input.setAttribute("type", currentType === "password" ? "text" : "password");
  }

  var selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
    var errorMessage;

    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];

    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](formElement.querySelector(rule.selector + ":checked"));
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add("invalid");
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
    }

    return !errorMessage;
  }

  // Lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = (e) => {
      e.preventDefault();

      var isFormValid = true;

      // Lặp qua từng rules và validate
      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce((values, input) => {
            switch (input.type) {
              case "radio":
                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                break;
              case "checkbox":
                if (!input.matches(":checked")) {
                  values[input.name] = "";
                  return values;
                }
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(input.value);
                break;
              case "file":
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }

            return values;
          }, {});
          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach((rule) => {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach((inputElement) => {
        // Xử lý trường hợp select
        inputElement.onchange = () => validate(inputElement, rule);

        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = () => {
          validate(inputElement, rule);
          var formLabel = getParent(inputElement, options.formGroupSelector).querySelector(".form-label-2");
          if (formLabel) {
            if (inputElement.value) {
              formLabel.classList.add("focus");
            } else {
              formLabel.classList.remove("focus");
            }
          }
        };

        // Xử lý mỗi khi người dùng focus
        inputElement.onfocus = () => {
          var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove("invalid");

          var formLabel = getParent(inputElement, options.formGroupSelector).querySelector(".form-label-2");
          if (formLabel) {
            formLabel.classList.add("focus");
          }
        };

        // Xử lý khi nhập vào input password hiển thị icon show
        inputElement.oninput = (e) => {
          if (inputElement.id.includes("password")) {
            var formGroupElement = getParent(e.target, options.formGroupSelector);
            var iconEyesHide = formGroupElement.querySelector(".iconEyesHide");
            if (iconEyesHide) {
              iconEyesHide.classList.add("active");
              if (!inputElement.value.trim()) {
                iconEyesHide.classList.remove("active");
              }
            }
          }
        };
      });
    });

    // Xử lý trường hợp show password
    var showPassword = formElement.querySelector("#show-password");
    if (showPassword) {
      showPassword.onclick = () => {
        var inputElements = formElement.querySelectorAll("input[name]");
        for (var input of inputElements) {
          if (input.id.includes("password")) {
            handelPassWord(input);
          }
        }
      };
    }

    // Xử lí khi người dùng click vào icon
    var eyesElement = formElement.querySelectorAll(".iconEyes");
    if (eyesElement) {
      eyesElement.forEach((eye) => {
        eye.onclick = (e) => {
          var formGroupElement = getParent(e.target, options.formGroupSelector);
          var inputElement = formGroupElement.querySelector("input");
          handelPassWord(inputElement, formGroupElement);
        };
      });
    }
  }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = (selector, message) => {
  return {
    selector,
    test(value) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = (selector, message) => {
  return {
    selector,
    test(value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = (selector, min = 6, message) => {
  return {
    selector,
    test(value) {
      return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = (selector, getConfirmValue, message) => {
  return {
    selector,
    test(value) {
      return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không chính xác";
    },
  };
};
