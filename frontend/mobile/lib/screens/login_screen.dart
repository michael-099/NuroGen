import 'package:final_sprs/main.dart';
import 'package:final_sprs/screens/register_screen.dart';
import 'package:final_sprs/core/app_export.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import 'package:http/retry.dart';

// ignore_for_file: must_be_immutable
class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  TextEditingController emailController = TextEditingController();

  TextEditingController passwordController = TextEditingController();

  bool? _isBtn1Taped;
  @override
  void initState() {
    super.initState();
    _isBtn1Taped = false;
  }

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Future<void> _login(context) async {
    // Replace 'your_api_endpoint' with the actual URL of your login API
    final storage = FlutterSecureStorage();
    try {
      final apiUrl = Uri.parse('http://10.4.103.212:5000/api/v1/auth/login');
      final Map<String, String> headers = {
        'Content-Type': 'application/json',
      };
      final response = await http.post(
        apiUrl,
        headers: headers,
        body: json.encode({
          'email': emailController.text,
          'password': passwordController.text,
        }),
      );

      var statusCode = response.statusCode;

      print("statuscode is:  {$statusCode}");
      if (response.statusCode == 201) {
        final responseData = json.decode(response.body);

        print('Login successful');
        final setCookieHeader = response.headers['set-cookie'];
        final sessionCookie = setCookieHeader!.split('; ')[0];

        await storage.write(key: 'sessionCookies', value: sessionCookie);
       
        final sessionCookies = await storage.read(key: 'sessionCookies');
        print("your cookies :$sessionCookies");

        await Navigator.of(context).push(MaterialPageRoute(builder: (context) {
          return const Dashboard();
        }));
      } else {
        // Failed login
        print(response.body);
        print('Login failed');
      }
    } catch (e) {
      print('the Error: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    mediaQueryData = MediaQuery.of(context);
    return Scaffold(
        extendBody: true,
        extendBodyBehindAppBar: true,
        resizeToAvoidBottomInset: false,
        body: Container(
            width: mediaQueryData.size.width,
            height: mediaQueryData.size.height,
            decoration: BoxDecoration(
                color: appTheme.whiteA700,
                image: DecorationImage(
                    image: AssetImage(ImageConstant.imgGroup57),
                    fit: BoxFit.cover)),
            child: Form(
                key: _formKey,
                child: Container(
                    width: double.maxFinite,
                    padding: EdgeInsets.symmetric(horizontal: 31.h),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text("Login here",
                              style:
                                  CustomTextStyles.headlineLargePoppinsPrimary),
                          SizedBox(height: 22.v),
                          SizedBox(
                              width: 228.h,
                              child: Text("Welcome back you’ve\nbeen missed!",
                                  maxLines: 3,
                                  overflow: TextOverflow.ellipsis,
                                  textAlign: TextAlign.center,
                                  style: CustomTextStyles
                                      .titleLargePoppinsErrorContainer)),
                          CustomTextFormField(
                              controller: emailController,
                              margin: EdgeInsets.only(top: 75.v, right: 9.h),
                              hintText: "Email",
                              hintStyle: CustomTextStyles.titleMediumGray700,
                              textInputType: TextInputType.emailAddress),
                          CustomTextFormField(
                            controller: passwordController,
                            margin: EdgeInsets.only(top: 29.v, right: 9.h),
                            hintText: "Password",
                            hintStyle: CustomTextStyles.titleMediumGray700,
                            textInputAction: TextInputAction.done,
                            textInputType: TextInputType.visiblePassword,
                            obscureText: true,
                          ),
                          Align(
                              alignment: Alignment.centerRight,
                              child: Padding(
                                  padding:
                                      EdgeInsets.only(top: 31.v, right: 9.h),
                                  child: Text("Forgot your password?",
                                      style: theme.textTheme.titleSmall))),
                          CustomElevatedButton(
                            height: 60.v,
                            text: "Sign in",
                            margin: EdgeInsets.only(top: 28.v, right: 9.h),
                            buttonStyle: CustomButtonStyles.outlineBlue,
                            buttonTextStyle: CustomTextStyles.titleLargePoppins,
                            onTap: () async {
                              print("email is : {$emailController} ");
                              await _login(context);
                            },
                          ),
                          CustomElevatedButton(
                              height: _isBtn1Taped! ? 60.v : 41.v,
                              text: "Create new account",
                              margin: EdgeInsets.only(top: 30.v, right: 9.h),
                              buttonStyle: CustomButtonStyles.fillWhiteA,
                              buttonTextStyle:
                                  CustomTextStyles.titleSmallGray800,
                              onTap: () async {
                                _isBtn1Taped = true;
                                await Future.delayed(
                                    const Duration(seconds: 1));
                                Navigator.of(context)
                                    .push(MaterialPageRoute(builder: (context) {
                                  return const RegisterScreen();
                                }));
                              }),
                          SizedBox(height: 64.v),
                          Text("Or continue with",
                              style: theme.textTheme.titleSmall),
                          SizedBox(height: 20.v),
                          Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                CustomImageView(
                                    svgPath: ImageConstant.imgPhgooglelogobold,
                                    height: 24.adaptSize,
                                    width: 24.adaptSize),
                                CustomImageView(
                                    svgPath: ImageConstant.imgIcsharpfacebook,
                                    height: 24.adaptSize,
                                    width: 24.adaptSize),
                                CustomImageView(
                                    svgPath: ImageConstant.imgIcbaselineapple,
                                    height: 24.adaptSize,
                                    width: 24.adaptSize)
                              ]),
                          SizedBox(height: 5.v)
                        ])))));
  }

  /// Navigates to the registerScreen when the action is triggered.
  ///
  /// The [BuildContext] parameter is used to build the navigation stack.
  /// When the action is triggered, this function uses the [Navigator] widget
  /// to push the named route for the registerScreen.
  onTapCreatenew(BuildContext context) {
    Navigator.pushNamed(context, "");
  }
}
