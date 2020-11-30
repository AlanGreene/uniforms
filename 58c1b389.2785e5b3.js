(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,u=m["".concat(i,".").concat(p)]||m[p]||s[p]||o;return a?r.a.createElement(u,l(l({ref:t},c),{},{components:a})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(114)),i={id:"api-forms",title:"Forms"},l={unversionedId:"api-forms",id:"api-forms",isDocsHomePage:!1,title:"Forms",description:"Forms components",source:"@site/../docs/api-forms.md",slug:"/api-forms",permalink:"/docs/api-forms",version:"current",sidebar:"docs",previous:{title:"Custom form",permalink:"/docs/examples-custom-form"},next:{title:"Fields",permalink:"/docs/api-fields"}},b=[{value:"Forms components",id:"forms-components",children:[{value:"<code>AutoForm</code>",id:"autoform",children:[]},{value:"<code>ValidatedQuickForm</code>",id:"validatedquickform",children:[]},{value:"<code>ValidatedForm</code>",id:"validatedform",children:[]},{value:"<code>QuickForm</code>",id:"quickform",children:[]},{value:"<code>BaseForm</code>",id:"baseform",children:[]}]},{value:"Form features",id:"form-features",children:[{value:"Asynchronous validation",id:"asynchronous-validation",children:[]},{value:"Autosave",id:"autosave",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Change reactions",id:"change-reactions",children:[]},{value:"Model transformations",id:"model-transformations",children:[]},{value:"Validation options and modes",id:"validation-options-and-modes",children:[]}]}],c={rightToc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"forms-components"},"Forms components"),Object(o.b)("p",null,"Most of the time you'll be using either ",Object(o.b)("inlineCode",{parentName:"p"},"AutoForm")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedForm"),", but there are also other form components (rather low-level ones) with different capabilities."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Component"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Self-generated?"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Self-managed?"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Self-validated?"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"AutoForm")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"ValidatedQuickForm")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"ValidatedForm")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"QuickForm")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"BaseForm")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2716\ufe0f")))),Object(o.b)("h3",{id:"autoform"},Object(o.b)("inlineCode",{parentName:"h3"},"AutoForm")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AutoForm")," extends ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedQuickForm")," with state management.\nIt is the most user-friendly and commonly used form.\nIt's self-generated so if you provide a schema, the fields will be automatically rendered.\nThese fields will be also validated.\nBy default, the validation will take place ",Object(o.b)("inlineCode",{parentName:"p"},"onSubmit"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," ",Object(o.b)("strong",{parentName:"p"},"after the first submission"),"."),Object(o.b)("h5",{id:"props"},"Props:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"onChangeModel")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Like ",Object(o.b)("inlineCode",{parentName:"td"},"onChange")," but for the whole model. Triggered just after ",Object(o.b)("inlineCode",{parentName:"td"},"onChange")," but with the next model instead of (key, value) pair.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedQuickForm")," props are also accepted and all methods are available.\nIn other words, that means that ",Object(o.b)("inlineCode",{parentName:"p"},"AutoForm")," receives all props listed on this page."),Object(o.b)("h5",{id:"props-usage"},"Props usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { AutoForm } from 'uniforms'; // Or from the theme package.\n\n<AutoForm onChangeModel={model => console.log(model)} />;\n")),Object(o.b)("h3",{id:"validatedquickform"},Object(o.b)("inlineCode",{parentName:"h3"},"ValidatedQuickForm")),Object(o.b)("p",null,"This form combines both ",Object(o.b)("inlineCode",{parentName:"p"},"QuickForm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedForm")," features.\nIt is not self-managed, however, it will automatically generate fields based on the provided schema and validate them."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All ",Object(o.b)("inlineCode",{parentName:"p"},"QuickForm")," props are also accepted and all methods are available.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Note:")," All ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedForm")," props are also accepted and all methods are available."),Object(o.b)("h3",{id:"validatedform"},Object(o.b)("inlineCode",{parentName:"h3"},"ValidatedForm")),Object(o.b)("p",null,"(",Object(o.b)("em",{parentName:"p"},"It's rather an internal form, but it's still exported."),")"),Object(o.b)("p",null,"It's based on ",Object(o.b)("inlineCode",{parentName:"p"},"BaseForm")," and extends its functionality by enabling automatic form validation.\nIts purpose is providing validation functions.\nIt's not autogenerated, so if you want to see any fields rendered, you have to manually add them.\n",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedForm")," is not self-managed, so you won't be able to type anything until there is no ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," handler,\nhowever, there will be validation checks."),Object(o.b)("h5",{id:"props-1"},"Props:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"onValidate")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Additional asynchronous validation. Schema validation has to be sync, so this is the only way to achieve async validation.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"validate")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Validation mode. By default, the form will start to validate from the time of the first submit and then revalidate on every change. It's ",Object(o.b)("inlineCode",{parentName:"td"},"onChangeAfterSubmit"),". There are also ",Object(o.b)("inlineCode",{parentName:"td"},"onChange")," and ",Object(o.b)("inlineCode",{parentName:"td"},"onSubmit")," modes, but those are quite self-explanatory.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"validator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Validator options. It's passed to ",Object(o.b)("inlineCode",{parentName:"td"},"getValidator")," of your schema bridge. It really depends on your schema.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All ",Object(o.b)("inlineCode",{parentName:"p"},"BaseForm")," props are also accepted and all methods are available."),Object(o.b)("h5",{id:"props-usage-1"},"Props usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { ValidatedForm } from 'uniforms'; // Or from the theme package.\n\n<ValidatedForm\n  onValidate={(model, error, callback) => {\n    // You can either ignore validation error...\n    if (omitValidation(model)) {\n      return callback(null);\n    }\n\n    // ...or any additional validation if an error is already there...\n    if (error) {\n      return callback();\n    }\n\n    // ...or feed it with another error.\n    MyAPI.validate(model, error => callback(error || null));\n  }}\n  validate=\"onChangeAfterSubmit\"\n  validator={{ clean: true }}\n  ref={form => {\n    // Validate form with the current model.\n    //   Returns a Promise, which rejects with an validation error or\n    //   resolves without any value. Note, that it resolves/rejects AFTER\n    //   the component is rerendered.\n    form.validate();\n\n    // Validate form with key set to value.\n    //   You can use it to check, if a given value will pass the\n    //   validation or not. Returns validation Promise, as described above.\n    form.validate(key, value);\n\n    // Validate form with the given model.\n    //   Rather internal function. Returns validation Promise, as described\n    //   above.\n    form.validateModel(model);\n  }}\n/>;\n")),Object(o.b)("h3",{id:"quickform"},Object(o.b)("inlineCode",{parentName:"h3"},"QuickForm")),Object(o.b)("p",null,"(",Object(o.b)("em",{parentName:"p"},"It's rather an internal form, but it's still exported."),")"),Object(o.b)("p",null,"It's based on ",Object(o.b)("inlineCode",{parentName:"p"},"BaseForm")," and extends its functionality by enabling automatic form generation.\nIf you provide a schema, the fields will be automatically rendered.\nHowever, ",Object(o.b)("inlineCode",{parentName:"p"},"QuickForm")," is not self-managed, so you won't be able to type anything until there is no ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," handler."),Object(o.b)("h5",{id:"props-2"},"Props:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"autoField")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Custom ",Object(o.b)("inlineCode",{parentName:"td"},"AutoField"),". It should be anything that will pass through ",Object(o.b)("inlineCode",{parentName:"td"},"React.createElement"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"errorsField")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Custom ",Object(o.b)("inlineCode",{parentName:"td"},"ErrorsField"),". It should be anything that will pass through ",Object(o.b)("inlineCode",{parentName:"td"},"React.createElement"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"submitField")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Custom ",Object(o.b)("inlineCode",{parentName:"td"},"SubmitField"),". It should be anything that will pass through ",Object(o.b)("inlineCode",{parentName:"td"},"React.createElement"),".")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," All ",Object(o.b)("inlineCode",{parentName:"p"},"BaseForm")," props are also accepted and all methods are available."),Object(o.b)("h5",{id:"props-usage-2"},"Props usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { QuickForm } from 'uniforms'; // Or from the theme package.\n\n<QuickForm\n  autoField={CustomAutoField}\n  errorsField={CustomErrorsField}\n  submitField={CustomSubmitField}\n/>;\n")),Object(o.b)("h3",{id:"baseform"},Object(o.b)("inlineCode",{parentName:"h3"},"BaseForm")),Object(o.b)("p",null,"(",Object(o.b)("em",{parentName:"p"},"It's rather an internal form, but it's still exported."),")"),Object(o.b)("p",null,"It's the very basic form & foundation for the other forms.\nIt's not autogenerated, so if you want to see any fields rendered, you have to manually add them.\nHowever, ",Object(o.b)("inlineCode",{parentName:"p"},"BaseForm")," is not self-managed, so you won't be able to type anything until there is no ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," handler."),Object(o.b)("h5",{id:"props-3"},"Props:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"autosaveDelay")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Autosave delay. Set 0 for an instant autosave.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"autosave")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Enable autosave. Every change triggers ",Object(o.b)("inlineCode",{parentName:"td"},"onSubmit"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"disabled")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Default ",Object(o.b)("inlineCode",{parentName:"td"},"disabled")," prop for all fields. By default it's false - set it to true to disable the whole form.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"error")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Validation error. Current validation state. It should be either compatible with your schema or an ",Object(o.b)("inlineCode",{parentName:"td"},"Error")," object.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"grid")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Bootstrap grid layout style. Passing a number is an equivalent of ",Object(o.b)("inlineCode",{parentName:"td"},"{sm: n}"),". Object is a ",Object(o.b)("inlineCode",{parentName:"td"},"{mode: size}")," object. Complete string is simply passed through. Available in: bootstrap3, bootstrap4.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"label")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Default label prop for all fields. By default it's true - set it to false to disable labels for the whole form.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"model")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Form model. An object with ",Object(o.b)("inlineCode",{parentName:"td"},"{field: value}")," structure. It doesn't matter if it has a prototype or not, but keep in mind that in ",Object(o.b)("inlineCode",{parentName:"td"},"onSubmit")," or in ",Object(o.b)("inlineCode",{parentName:"td"},"onChangeModel")," you'll receive a plain object. If you treat form as an input, then this is a value.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"modelTransform")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Model transform. Function transforming one model into another. It's used in a few situations (modes) described below. Do not mutate a given model!")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"onChange")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Field change action. It receives two arguments: key and value, where the key is a dot-separated path to the changed field and value is a requested value.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"onSubmit")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Submit action. When the form is submitted manually or by an HTML5 event, then it's called with the current model. ",Object(o.b)("strong",{parentName:"td"},"Note:")," use ",Object(o.b)("inlineCode",{parentName:"td"},"Promise")," to return values and errors - synchronous ",Object(o.b)("inlineCode",{parentName:"td"},"return")," and ",Object(o.b)("inlineCode",{parentName:"td"},"throw")," are disallowed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"placeholder")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Default placeholder prop for all fields. By default it's false - set it to true to enable placeholders for the whole form.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"schema")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Form schema. It's used for form generation in QuickForm and validation in ValidatedForm.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"showInlineError")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Default ",Object(o.b)("inlineCode",{parentName:"td"},"showInlineError")," prop for all fields. By default it's false - set it to true to enable inline errors for the whole form. Available in: antd, bootstrap3, bootstrap4, semantic.")))),Object(o.b)("h5",{id:"props-usage-3"},"Props usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { BaseForm } from 'uniforms'; // Or from the theme package.\n\n<BaseForm\n  autosaveDelay={0}\n  autosave={false}\n  disabled={false}\n  error={new Error('Nope.')}\n  grid={3} // 'col-3-sm' on label, 'col-9-sm' on input\n  grid=\"4\" // 'col-4-sm' on label, 'col-8-sm' on input\n  grid={{ md: 5 }} // 'col-5-md' on label, 'col-7-md' on input\n  grid=\"col-6-xl\" // 'col-6-xl' on label, 'col-6-xl' on input\n  label\n  model={{ fieldA: 1 }}\n  modelTransform={(mode, model) => {\n    // This model will be passed to the fields.\n    if (mode === 'form') {\n      /* ... */\n    }\n\n    // This model will be submitted.\n    if (mode === 'submit') {\n      /* ... */\n    }\n\n    // This model will be validated.\n    if (mode === 'validate') {\n      /* ... */\n    }\n\n    // Otherwise, return unaltered model.\n    return model;\n  }}\n  onChange={(key, value) => console.log(key, value)}\n  onSubmit={model => db.saveThatReturnsPromiseOrNothing(model)}\n  placeholder={false}\n  schema={myFormSchema}\n  showInlineError\n  ref={form => {\n    // Reset form.\n    //   It will reset changed state, model state in AutoForm, validation\n    //   state in ValidatedForm and rerender.\n    form.reset();\n\n    // Trigger form change.\n    //   It's a programmatic equivalent of a change event.\n    form.change(key, value);\n\n    // Submit form.\n    //   It's a programmatic equivalent of a submit event. Returns a promise,\n    //   which will either resolve with submitted form or reject with\n    //   validation error in ValidatedForm.\n    form.submit();\n  }}\n/>;\n")),Object(o.b)("h2",{id:"form-features"},"Form features"),Object(o.b)("h3",{id:"asynchronous-validation"},"Asynchronous validation"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AutoForm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ValidatedForm")," both accept an ",Object(o.b)("inlineCode",{parentName:"p"},"onValidate")," prop. It can be used to create an asynchronous validation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const onValidate = (model, error, callback) => {\n  // You can either ignore validation error...\n  if (omitValidation(model)) {\n    return callback(null);\n  }\n\n  // ...or any additional validation if an error is already there...\n  if (error) {\n    return callback();\n  }\n\n  // ...or feed it with another error.\n  MyAPI.validate(model, error => callback(error || null));\n};\n\n// Later...\n\n<ValidatedForm {...props} onValidate={onValidate} />;\n")),Object(o.b)("h3",{id:"autosave"},"Autosave"),Object(o.b)("p",null,"Every form has autosave functionality. If you set an ",Object(o.b)("inlineCode",{parentName:"p"},"autosave")," prop, then every change will trigger a submit. There's also an ",Object(o.b)("inlineCode",{parentName:"p"},"autosaveDelay")," prop - a minimum time between saves in milliseconds (default: ",Object(o.b)("inlineCode",{parentName:"p"},"0"),")."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<AutoForm\n  autosave\n  autosaveDelay={5000} // 5 seconds\n  schema={schema}\n  onSubmit={onSubmit}\n/>\n")),Object(o.b)("h3",{id:"methods"},"Methods"),Object(o.b)("p",null,"You can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/more-about-refs.html"}),"React ",Object(o.b)("inlineCode",{parentName:"a"},"ref")," prop")," to manually access form methods. Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const MyForm = ({ schema, onSubmit }) => {\n  let formRef;\n\n  return (\n    <section>\n      <AutoForm\n        ref={ref => (formRef = ref)}\n        schema={schema}\n        onSubmit={onSubmit}\n      />\n      <small onClick={() => formRef.reset()}>Reset</small>\n      <small onClick={() => formRef.submit()}>Submit</small>\n    </section>\n  );\n};\n")),Object(o.b)("p",null,"All available methods:"),Object(o.b)("h4",{id:"changekey-value"},Object(o.b)("inlineCode",{parentName:"h4"},"change(key, value)")),Object(o.b)("p",null,"Triggers a form change. It's a programmatic equivalent of a change event."),Object(o.b)("h4",{id:"reset"},Object(o.b)("inlineCode",{parentName:"h4"},"reset()")),Object(o.b)("p",null,"Resets a form. It will also reset changed state, model state (only in AutoForm), validation state (only in ValidatedForm) and trigger a rerender."),Object(o.b)("h4",{id:"submit"},Object(o.b)("inlineCode",{parentName:"h4"},"submit()")),Object(o.b)("p",null,"Submits a form. It's a programmatic equivalent of a submit event. Returns a promise, which will either resolve with a submitted model or reject with validation error in ValidatedForm."),Object(o.b)("h4",{id:"validate"},Object(o.b)("inlineCode",{parentName:"h4"},"validate()")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(added in ",Object(o.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")")),Object(o.b)("p",null,"Validates a form with the current model. Returns a Promise, which rejects with a validation error or resolves without any value. Note, that it resolves/rejects ",Object(o.b)("strong",{parentName:"p"},"after")," the component is rerendered."),Object(o.b)("h4",{id:"validatekey-value"},Object(o.b)("inlineCode",{parentName:"h4"},"validate(key, value)")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(added in ",Object(o.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")")),Object(o.b)("p",null,"Validates a form with key set to value. You can use it to check, if a given value will pass the validation or not. Returns validation Promise, as described above."),Object(o.b)("h4",{id:"validatemodelmodel"},Object(o.b)("inlineCode",{parentName:"h4"},"validateModel(model)")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(added in ",Object(o.b)("inlineCode",{parentName:"em"},"ValidatedForm"),")")),Object(o.b)("p",null,"Validates a form with the given model. Returns validation Promise, as described above."),Object(o.b)("h3",{id:"change-reactions"},"Change reactions"),Object(o.b)("p",null,"If you want to make one field to influence others, simply extend ",Object(o.b)("inlineCode",{parentName:"p"},"AutoForm")," and override ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," method."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class ChainForm extends AutoForm {\n  onChange(key, value) {\n    if (key === 'key_to_intercept') return;\n    if (key === 'key_to_translate') return super.onChange('another_key', value);\n    if (key === 'key_to_mutate') {\n      super.onChange('another_key1', value * 2);\n      super.onChange('another_key2', value / 2);\n      return;\n    }\n\n    super.onChange(key, value);\n  }\n}\n")),Object(o.b)("p",null,"It can be easily applied multiple times to make your forms even more reusable."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const withMultipliedField = (fieldA, fieldB, Form) =>\n  class withMultipliedFieldForm extends Form {\n    onChange(key, value) {\n      // Multiply fieldA\n      if (key === fieldA) super.onChange(fieldB, value + value);\n\n      // Pass every change\n      super.onChange(key, value);\n    }\n  };\n")),Object(o.b)("h3",{id:"model-transformations"},"Model transformations"),Object(o.b)("p",null,"If you need to transform model before it will be validated, submitted or passed down to the fields, there's a ",Object(o.b)("inlineCode",{parentName:"p"},"modelTransform")," prop, which should be used in those use cases."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<AutoForm\n  // Do not mutate given model!\n  modelTransform={(mode, model) => {\n    // This model will be passed to the fields.\n    if (mode === 'form') {\n      /* ... */\n    }\n\n    // This model will be submitted.\n    if (mode === 'submit') {\n      /* ... */\n    }\n\n    // This model will be validated.\n    if (mode === 'validate') {\n      /* ... */\n    }\n\n    // Otherwise, return unaltered model.\n    return model;\n  }}\n  onSubmit={onSubmit}\n  schema={schema}\n/>\n")),Object(o.b)("h3",{id:"validation-options-and-modes"},"Validation options and modes"),Object(o.b)("p",null,"Any form can be validated in one those three styles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"onChange"),"\nValidate on every change.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"onChangeAfterSubmit")," ",Object(o.b)("em",{parentName:"p"},"(default)"),"\nValidate on every change, but only after first submit.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"onSubmit"),"\nValidate on every submit."))),Object(o.b)("p",null,"If your schema validator accepts any options, those can be passed in ",Object(o.b)("inlineCode",{parentName:"p"},"validator")," prop."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<AutoForm\n  validate="onChange"\n  validator={validatorOptions}\n  schema={schema}\n  onSubmit={onSubmit}\n/>\n')))}d.isMDXComponent=!0}}]);