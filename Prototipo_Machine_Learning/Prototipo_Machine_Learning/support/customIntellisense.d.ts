declare namespace Cypress {
    interface Chainable {
      // Adicionando comandos personalizados vindo do commands.js
      // para o IntelliSense conseguir ter acesso
  
      ContainsAndClick(text: any);
      microsoftSingleSingOn();
      GetInnerText(element: any);
      GetAgreementNumber(element: any);
      GetProfile(element: any);
      GetPageCurrentTab();
      GetPagePositionTab(positionNumber: any);
      ClickOnTheElement(element: any);
      ClickOnTheSubMenu(element: any, optionText: any);
      ClickAndMouseMoveTheElement(parenteWord: any, childrenWord: any);
      ClickWhenEnabled(element: any);
      ClickOut();
      CloseLastPageTab();
      DoubleClickOnTheElement(element: any);
      DragAndDrop(startElement: any, endElement: any);
      MouseMoveTheElement(element: any);
      OpenPage();
      PageRefresh();
      PageBack();
      PageForward();
      SendKeyToElement(element: any, word: any);
      SendKeyToElementKeyEnter(element: any, word: any);
      SendKeyToElementKeyEsc(element: any, word: any);
      SendKeyToElementKeyTab(element: any, word: any);
      ScrollToTheTop();
      ScrollToBottom();
      ScrollToLeft();
      ScrollToRight();
      ScrollToElementView(element: any);
      ScrollElementToLeft(element: any);
      ScrollElementToRight(element: any);
      FindTHOnTheTable(element: any, text: any);
      FindTROnTheTable(element: any, text: any);
      FindTHEndCountColumnsOnTheTable(element: any, numbers: any);
      FindTREndCountColumnsOnTheTable(element: any, numbers: any);
      SelectComboBoxByText(element: any, optionText: any);
      SelectComboBoxByIndex(element: any, indexNumber: any);
      SelectComboBoxByValue(element: any, value: any);
      SelectPositionOnTheForm(position: any);
      SelectTextOnTheForm(text: any);
      WaitElement(element: any, timeout: any);
      WaitElementAndClick(element: any, timeout: any);
      WaitElementInvisibility(element: any, timeout: any);
      WaitElementInvisibilityWithText(element: any, text: any, timeout: any);
      WaitElementTextToBePresent(element: any, text: any, timeout: any);
      WaitElementTextToBePresentInValue(element: any, text: any, timeout: any);
      WaitElementContains(element: any, text: any, timeout: any);
      WaitElementContainsClick(element: any, text: any, timeout: any);
      ValidateElementPass(element: any);
      ValidateElementPassUsingSelector(element: any);
      ValidateElementFail(element: any);
      ValidateElementInnerTextEquals(element: any, expectedResult: any);
      ValidateElementInnerTextContains(element: any, expectedResult: any);
      ValidateElementValueTextEquals(element: any, expectedResult: any);
      ValidateElementValueTextContains(element: any, expectedResult: any);
      ValidateMessage(text: any, timeout: any);
      ValidateStatusWithGreenColor(element: any);
    }
  }