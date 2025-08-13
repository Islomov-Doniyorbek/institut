import React from 'react'
import { FaDownload } from 'react-icons/fa'
import ActiveTopPage from '../../components/activeTopPage'
import { useTranslation } from 'react-i18next'

const Program = () => {
  const { t } = useTranslation()

  return (
    <div className='program'>
        <ActiveTopPage pageTitle={t("admission_programs")} />

        <div className='program_box'>
            <div className='program_card'>
                <h1>{t("admission_programs")}</h1>
                <p>{t("program_intro_1")}</p>
                <p>{t("program_intro_2")}</p>

                <div className='program_download'>
                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_1")}</p>
                    </a>

                    <a href="/Images/2-илova(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_2")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_3")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_4")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_5")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_6")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_7")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_8")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_9")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_10")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_11")}</p>
                    </a>

                    <a href="/Images/2-илова(1).pdf" download="2-илова(1).pdf" type="application/pdf">
                        <p><span><FaDownload /></span>{t("program_12")}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program
