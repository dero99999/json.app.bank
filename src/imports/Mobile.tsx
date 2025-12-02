import svgPaths from "./svg-f048eetpgl";
import clsx from "clsx";
import { useState } from "react";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function SocialButton2({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <button
      onClick={onClick}
      className="basis-0 bg-[#f3f9fa] grow min-h-px min-w-px relative rounded-[12px] shrink-0 border-none cursor-pointer hover:bg-[#e8f4f5] transition-colors"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[9px] py-[8px] relative w-full">{children}</div>
      </div>
    </button>
  );
}

function OrHelper() {
  return (
    <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 1">
          <line id="Line 2" stroke="var(--stroke-0, #CFDFE2)" x2="109.5" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0c1421] text-[14px] text-nowrap tracking-[0.14px]">
      <p className="leading-none whitespace-pre">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-center text-nowrap", additionalClassNames)}>
      <p className="leading-none whitespace-pre">{text}</p>
    </div>
  );
}
type InputTextProps = {
  text: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
};

function InputText({ text, value, onChange, type = "text" }: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[#f3f7fb] h-[42px] ml-0 mt-0 relative rounded-[8px] w-[342px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#d4d7e3] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="[grid-area:1_/_1] bg-transparent border-none outline-none ml-[12.43px] h-[42px] w-[317px] font-['Roboto:Regular',sans-serif] text-[14px] tracking-[0.14px] text-[#0c1421] z-10 px-2"
        style={{ fontVariationSettings: "'wdth' 100" }}
      />
      {!hasValue && !isFocused && (
        <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] ml-[12.43px] mt-[21px] relative text-[#8897ad] text-[14px] text-nowrap tracking-[0.14px] translate-y-[-50%] pointer-events-none z-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-none whitespace-pre">{text}</p>
        </div>
      )}
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[180px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="h-[180px] w-full" />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full" data-name="Intro">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0c1421] text-[0px] tracking-[0.24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none not-italic text-[24px] whitespace-pre-wrap">
          <span className="font-['SF_Pro_Rounded:Semibold',sans-serif]">{`Welcome `}</span>
          <span className="font-['SF_Pro_Rounded:Regular',sans-serif]">{` 👋`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['ABeeZee:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#313957] text-[15px] tracking-[0.15px] w-full">
        <p className="leading-[1.6]">Maak je account hier</p>
      </div>
    </div>
  );
}

type InputProps = {
  email: string;
  onEmailChange: (value: string) => void;
};

function Input({ email, onEmailChange }: InputProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="Input">
      <Text1 text="Email" />
      <InputText text="Example@email.com" value={email} onChange={onEmailChange} type="email" />
    </div>
  );
}

type Input1Props = {
  password: string;
  onPasswordChange: (value: string) => void;
};

function Input1({ password, onPasswordChange }: Input1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="Input">
      <Text1 text="Password" />
      <InputText text="At least 8 characters" value={password} onChange={onPasswordChange} type="password" />
    </div>
  );
}

type MainButtonProps = {
  onClick: () => void;
};

function MainButton({ onClick }: MainButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#ff7e61] box-border content-stretch flex items-center justify-between px-0 py-[14px] relative rounded-[12px] shrink-0 w-full cursor-pointer border-none hover:bg-[#ff6a4d] transition-colors"
      data-name="Main Button"
    >
      <Text text="Sign in" additionalClassNames="text-[16px] text-white tracking-[0.16px]" />
    </button>
  );
}

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Valid credentials
  const VALID_EMAIL = "user@example.com";
  const VALID_PASSWORD = "password123";

  const handleSubmit = (onSuccess: () => void) => {
    setError("");
    
    // Check if credentials match
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      console.log("Sign in successful!", { email, password });
      onSuccess();
    } else {
      console.log("Sign in failed", { email, password });
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    alert("Password recovery: password123");
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Form">
      <Input email={email} onEmailChange={setEmail} />
      <Input1 password={password} onPasswordChange={setPassword} />
      {error && (
        <div className="w-full text-[#ff4444] text-[12px] text-left px-1 -mt-2">
          {error}
        </div>
      )}
      <button
        onClick={handleForgotPassword}
        className="bg-transparent border-none cursor-pointer p-0"
      >
        <Text text="Forgot Password?" additionalClassNames="text-[#1e4ae9] text-[14px] tracking-[0.14px] hover:underline" />
      </button>
      <MainButton onClick={handleSubmit} />
    </div>
  );
}

function Or() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-0 py-[10px] relative shrink-0 w-full" data-name="Or">
      <OrHelper />
      <Text text="Or sign in with" additionalClassNames="text-[#294957] text-[14px] tracking-[0.14px]" />
      <OrHelper />
    </div>
  );
}

function Google() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_1_145)" id="Google">
        <path d={svgPaths.p1dfc2800} fill="var(--fill-0, #4285F4)" id="Vector" />
        <path d={svgPaths.p2f8cca80} fill="var(--fill-0, #34A853)" id="Vector_2" />
        <path d={svgPaths.p32da4e80} fill="var(--fill-0, #FBBC04)" id="Vector_3" />
        <path d={svgPaths.p2c279600} fill="var(--fill-0, #EA4335)" id="Vector_4" />
      </g>
      <defs>
        <clipPath id="clip0_1_145">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}

function SocialButton() {
  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    alert("Google sign in clicked");
  };

  return (
    <SocialButton2 onClick={handleGoogleSignIn}>
      <Google />
      <Text text="Google" additionalClassNames="text-[#313957] text-[16px] tracking-[0.16px]" />
    </SocialButton2>
  );
}

function Facebook() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_1_151)" id="Facebook">
        <path d={svgPaths.p273cd900} fill="var(--fill-0, #1877F2)" id="Vector" />
        <path d={svgPaths.p137c9ab0} fill="var(--fill-0, white)" id="Vector_2" />
      </g>
      <defs>
        <clipPath id="clip0_1_151">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}

function SocialButton1() {
  const handleFacebookSignIn = () => {
    console.log("Facebook sign in clicked");
    alert("Facebook sign in clicked");
  };

  return (
    <SocialButton2 onClick={handleFacebookSignIn}>
      <Facebook />
      <Text text="Facebook" additionalClassNames="text-[#313957] text-[16px] tracking-[0.16px]" />
    </SocialButton2>
  );
}

function SocialButtonsColumns() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Social buttons columns">
      <SocialButton />
      <SocialButton1 />
    </div>
  );
}

function SpcialLogin() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Spcial login">
      <Or />
      <SocialButtonsColumns />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="h-[548px] relative shrink-0 w-full" data-name="Login Form">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[548px] items-start px-[24px] py-0 relative w-full">
          <Intro />
          <Form />
          <SpcialLogin />
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#313957] text-[16px] text-center tracking-[0.16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.6]">
              <span>{`Don't you have an account? `}</span>
              <span className="text-[#4c4fff]">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type LoginFormWrapperProps = {
  onLoginSuccess: () => void;
};

function LoginFormWrapper({ onLoginSuccess }: LoginFormWrapperProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Valid credentials
  const VALID_EMAIL = "user@example.com";
  const VALID_PASSWORD = "password123";

  const handleSubmit = () => {
    setError("");
    
    // Check if credentials match
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      console.log("Sign in successful!", { email, password });
      onLoginSuccess();
    } else {
      console.log("Sign in failed", { email, password });
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    alert("Password recovery: password123");
  };

  return (
    <div className="h-[548px] relative shrink-0 w-full" data-name="Login Form">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[548px] items-start px-[24px] py-0 relative w-full">
          <Intro />
          <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Form">
            <Input email={email} onEmailChange={setEmail} />
            <Input1 password={password} onPasswordChange={setPassword} />
            {error && (
              <div className="w-full text-[#ff4444] text-[12px] text-left px-1 -mt-2">
                {error}
              </div>
            )}
            <button
              onClick={handleForgotPassword}
              className="bg-transparent border-none cursor-pointer p-0"
            >
              <Text text="Forgot Password?" additionalClassNames="text-[#1e4ae9] text-[14px] tracking-[0.14px] hover:underline" />
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#ff7e61] box-border content-stretch flex items-center justify-between px-0 py-[14px] relative rounded-[12px] shrink-0 w-full cursor-pointer border-none hover:bg-[#ff6a4d] transition-colors"
              data-name="Main Button"
            >
              <Text text="Sign in" additionalClassNames="text-[16px] text-white tracking-[0.16px]" />
            </button>
          </div>
          <SpcialLogin />
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#313957] text-[16px] text-center tracking-[0.16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.6]">
              <span>{`Don't you have an account? `}</span>
              <span className="text-[#4c4fff]">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessPage({ userEmail }: { userEmail: string }) {
  return (
    <div className="h-[548px] relative shrink-0 w-full flex items-center justify-center">
      <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[24px] py-0 relative w-full">
        <div className="w-[80px] h-[80px] bg-[#4CAF50] rounded-full flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div className="flex flex-col gap-[16px] items-center w-full">
          <div className="flex flex-col font-['SF_Pro_Rounded:Semibold',sans-serif] justify-center text-[#0c1421] text-[28px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none">Welcome!</p>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center text-[#313957] text-[16px] text-center tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.6]">You have successfully logged in</p>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center text-[#8897ad] text-[14px] text-center tracking-[0.14px] mt-4" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.6]">{userEmail}</p>
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#ff7e61] box-border content-stretch flex items-center justify-center px-[24px] py-[14px] relative rounded-[12px] w-full cursor-pointer border-none hover:bg-[#ff6a4d] transition-colors mt-8"
        >
          <Text text="Log out" additionalClassNames="text-[16px] text-white tracking-[0.16px]" />
        </button>
      </div>
    </div>
  );
}

export default function Mobile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setUserEmail("user@example.com");
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[27px] items-center px-0 py-[24px] relative w-[393px] h-[852px] mx-auto overflow-auto" data-name="Mobile">
      <Frame />
      {isLoggedIn ? <SuccessPage userEmail={userEmail} /> : <LoginFormWrapper onLoginSuccess={handleLoginSuccess} />}
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#959cb6] text-[14px] text-center tracking-[0.14px] w-[390px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none">© 2023 ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}