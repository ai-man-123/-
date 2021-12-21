package views.html
package practice

import lila.api.Context
import lila.app.templating.Environment._
import lila.app.ui.ScalatagsTemplate._

import controllers.routes

object index {

  def apply(data: lila.practice.UserPractice)(implicit ctx: Context) =
    views.html.base.layout(
      title = trans.practice.practiceYourChess.txt(),
      moreCss = cssTag("practice.index"),
      moreJs = embedJsUnsafeLoadThen("""$('.do-reset').on('click', function() {
if (confirm($(this).data('confirm'))) this.parentNode.submit();
});"""),
      openGraph = lila.app.ui
        .OpenGraph(
          title = "Practice your chess",
          description = "Learn how to master the most common patterns in chess",
          url = s"$netBaseUrl${routes.Practice.index}"
        )
        .some
    ) {
      main(cls := "page-menu")(
        st.aside(cls := "page-menu__menu practice-side")(
          i(cls := "fat"),
          h1(trans.practice.practice()),
          h2(trans.practice.makesPerfect()),
          div(cls := "progress")(
            div(cls := "text")(trans.practice.progressX(s"${data.progressPercent}%")),
            div(cls := "bar", style := s"width: ${data.progressPercent}%")
          ),
          postForm(action := routes.Practice.reset)(
            if (ctx.isAuth) (data.nbDoneChapters > 0) option a(cls := "do-reset", attr("data-confirm") := trans.practice.youWillLoseYourPracticeProgress.txt())(trans.practice.resetMyProgress())
            else a(href := routes.Auth.signup)(trans.practice.signUpToSaveYourProgress())
          )
        ),
        div(cls := "page-menu__content practice-app")(
          data.structure.sections.map { section =>
            st.section(
              h2(section.name),
              div(cls := "studies")(
                section.studies.map { stud =>
                  val prog = data.progressOn(stud.id)
                  a(
                    cls := s"study ${if (prog.complete) "done" else "ongoing"}",
                    href := routes.Practice.show(section.id, stud.slug, stud.id.value)
                  )(
                    ctx.isAuth option span(cls := "ribbon-wrapper")(
                      span(cls := "ribbon")(prog.done, " / ", prog.total)
                    ),
                    i(cls := s"${stud.id}"),
                    span(cls := "text")(
                      h3(stud.name),
                      em(stud.desc)
                    )
                  )
                }
              )
            )
          }
        )
      )
    }
}
