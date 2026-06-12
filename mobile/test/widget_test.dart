import 'package:flutter_test/flutter_test.dart';

import 'package:mobile/main.dart';

void main() {
  testWidgets('auth flow opens login and navigates to register', (
    tester,
  ) async {
    await tester.pumpWidget(const XploreAuthApp());

    expect(find.text('Welcome back'), findsOneWidget);
    expect(find.text('Create your account'), findsNothing);

    await tester.ensureVisible(find.text('Create account'));
    await tester.tap(find.text('Create account'));
    await tester.pumpAndSettle();

    expect(find.text('Create your account'), findsOneWidget);
    expect(find.text('Welcome back'), findsNothing);

    await tester.ensureVisible(find.text('Sign in'));
    await tester.tap(find.text('Sign in'));
    await tester.pumpAndSettle();

    expect(find.text('Welcome back'), findsOneWidget);
  });

  testWidgets('login validates required password', (tester) async {
    await tester.pumpWidget(const XploreAuthApp());

    await tester.ensureVisible(find.text('SIGN IN'));
    await tester.tap(find.text('SIGN IN'));
    await tester.pump();

    expect(find.text('Password is required'), findsOneWidget);
  });
}
